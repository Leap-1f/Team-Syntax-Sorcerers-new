"use client"; // Important for using useState and useEffect
import * as React from "react";
import { useState, useEffect } from "react";
import { Box, Button, Divider } from "@mui/material";

interface LocationProps {
    city: string;
    address: string;
    openingHours: string;
    coordinates: { lat: number; lng: number };
}
declare global {
    interface Window {
        google: any;
        initMap?: () => void;
    }
}

const darkModeEnabled = localStorage.getItem("darkModeEnabled");
if (darkModeEnabled === "true") {
    document.body.classList.add("dark-mode");
}

const Location: React.FC<LocationProps> = ({ city, address, openingHours }) => (
    <>
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
            }}
        >
            <div
                className={`text-lg text-left leading-5 ${
                    darkModeEnabled === "true" ? "text-dark" : "text-light"
                } max-md:max-w-full`}
            >
                {city}
            </div>
            <div
                className={`mt-5 text-base text-left leading-6 ${
                    darkModeEnabled === "true" ? "text-dark" : "text-light"
                } max-md:max-w-full`}
            >
                {address}
            </div>
            <div
                className={`mt-5 ${
                    darkModeEnabled === "true" ? "text-dark" : "text-light"
                } text-left max-md:max-w-full`}
            >
                {openingHours}
            </div>
        </Box>
    </>
);

const ContactUsMap: React.FC = () => {
    const [googleMap, setGoogleMap] = useState<any>(null);
    const [marker, setMarker] = useState<any>(null);
    const apiKey = "AIzaSyCqaNzlb7sW2j3Bskt5KvxZqlc6boL6m34";

    useEffect(() => {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
        script.async = true;
        script.defer = true;
        window.initMap = () => {
            const map = new window.google.maps.Map(
                document.getElementById("google-map-iframe"),
                {
                    center: { lat: 47.9123970797613, lng: 106.90358506202938 },
                    zoom: 14,
                }
            );
            setGoogleMap(map);
        };
        document.head.appendChild(script);

        return () => {
            document.head.removeChild(script);
            window.initMap = undefined;
        };
    }, [apiKey]);

    const handleCityClick = (
        coordinates: { lat: number; lng: number },
        city: string
    ) => {
        if (googleMap) {
            const location = new window.google.maps.LatLng(
                coordinates.lat,
                coordinates.lng
            );
            googleMap.setCenter(location);
            googleMap.setZoom(18);
            if (marker) {
                marker.setMap(null);
            }
            const newMarker = new window.google.maps.Marker({
                position: location,
                map: googleMap,
                title: city,
            });
            setMarker(newMarker);

            const mapElement = document.getElementById("google-map-iframe");
            if (mapElement) {
                mapElement.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    const locations: LocationProps[] = [
        {
            city: "Ulaanbaatar",
            address: "Chinggis Ave 17, 3rd floor Gurvan Gol Office, MN",
            openingHours: "Open: 9:30 am – 9:00 pm",
            coordinates: { lat: 47.91397456297272, lng: 106.9158867090484 },
        },
        {
            city: "NewYork",
            address: "S9 Heaven Stress, Beverly Hill, Melbourne, US",
            openingHours: "Open: 9:30 am – 9:00 pm",
            coordinates: { lat: 34.08132794439001, lng: -118.4142710578492 },
        },
        {
            city: "London",
            address: "Zone B, 2 Pancras Sq, London N1C 4AG, UK",
            openingHours: "Open: 9:30 am – 9:00 pm",
            coordinates: { lat: 51.533577662719786, lng: -0.12505068496236937 },
        },
        {
            city: "Melbourne",
            address: "LaTrobe and Swanston Streets, Melbourne VIC 3000, AUS",
            openingHours: "Open: 9:30 am – 9:00 pm",
            coordinates: { lat: -37.80944578723222, lng: 144.96342970202434 },
        },
        {
            city: "Chicago",
            address: "6150 S Laramie Michigan Ave, Chicago, IL 60611, US",
            openingHours: "Open: 9:30 am – 9:00 pm",
            coordinates: { lat: 41.78045850158991, lng: -87.75332264244176 },
        },
        {
            city: "Singapore",
            address: "30 Pasir Panjang Mapletree Business City, SG",
            openingHours: "Open: 9:30 am – 9:00 pm",
            coordinates: { lat: 1.274394926950098, lng: 103.79976410072398 },
        },
        {
            city: "Berlin",
            address: "Leipziger Pl. 12, 10117 Berlin, DE",
            openingHours: "Open: 9:30 am – 9:00 pm",
            coordinates: { lat: 52.51016391459081, lng: 13.379625722463855 },
        },
        {
            city: "Milan",
            address: "Piazzale Angelo Moratti, 20151 Milano MI, ITL",
            openingHours: "Open: 9:30 am – 9:00 pm",
            coordinates: { lat: 45.47657475709843, lng: 9.12270899358182 },
        },
    ];

    return (
        <main
            className={`flex flex-col items-center px-16 pt-11 pb-20 ${
                darkModeEnabled === "true"
                    ? "background-dark"
                    : "background-light"
            } max-md:px-5`}
        >
            <div className="flex gap-5 w-full max-w-[1399px] max-md:flex-wrap max-md:max-w-full">
                <div className="shrink-0 self-end w-px h-px bg-black border border-black border-solid mt-[742px] max-md:mt-10" />
                <div className="flex flex-col  grow shrink-0 items-center  basis-0 w-fit max-md:max-w-full">
                    <h1 className="text-7xl font-medium text-center uppercase leading-[96px] max-md:max-w-full max-md:text-4xl neonText text-white shadow-neon">
                        Contact Us
                    </h1>

                    <p
                        className={`mx-auto mt-32 text-4xl leading-7 text-center max-md:mt-10 max-md:max-w-full`}
                    >
                        Here is Our Store Locations:
                    </p>

                    <div className="flex gap-5 self-center mt-14 w-full max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                        <section
                            className={`flex z-10 rounded-[20px] opacity-80 items-center p-20 mx-10 justify-around gap-15 text-base my-20 text-black ${
                                darkModeEnabled === "true"
                                    ? "background-dark white-box-shadow"
                                    : "background-light"
                            } shadow-2xl w-[1200px] max-md:flex-wrap max-md:px-5 max-md:max-w-full`}
                        >
                            <div className="flex flex-col self-stretch my-auto mt-9 gap-10  leading-[151%] max-md:max-w-full">
                                {locations
                                    .slice(0, 4)
                                    .map((location, index) => (
                                        <Button
                                            sx={{
                                                textAlign: "left",
                                                justifyContent: "flex-start",

                                                color: "red",
                                                backgroundColor: "transparent",
                                                "&:hover": {
                                                    color:
                                                        darkModeEnabled ===
                                                        "true"
                                                            ? "#2bb9a9"
                                                            : "black",
                                                    backgroundColor:
                                                        darkModeEnabled ===
                                                        "true"
                                                            ? "#2bb9a9"
                                                            : "#2bb9a9",
                                                },
                                            }}
                                            key={index}
                                            onClick={() =>
                                                handleCityClick(
                                                    location.coordinates,
                                                    location.city
                                                )
                                            }
                                        >
                                            <Location {...location} />
                                        </Button>
                                    ))}
                            </div>
                            <Divider
                                sx={{
                                    mx: 2,
                                    height: "650px",
                                    width: "3px",
                                    borderRadius: "10px",
                                    bgcolor: "#18BA51",
                                }}
                            />
                            <div className="flex flex-col self-stretch m-auto mb-8  mt-9 gap-10 leading-[161%]">
                                {locations.slice(4).map((location, index) => (
                                    <Button
                                        sx={{
                                            textAlign: "left",
                                            justifyContent: "flex-start",

                                            color: "red",
                                            backgroundColor: "transparent",
                                            "&:hover": {
                                                color:
                                                    darkModeEnabled === "true"
                                                        ? "#2bb9a9"
                                                        : "black",
                                                backgroundColor:
                                                    darkModeEnabled === "true"
                                                        ? "#2bb9a9"
                                                        : "#2bb9a9",
                                            },
                                        }}
                                        key={index}
                                        onClick={() =>
                                            handleCityClick(
                                                location.coordinates,
                                                location.city
                                            )
                                        }
                                    >
                                        <Location {...location} />
                                    </Button>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
            <div
                id="google-map-iframe"
                style={{
                    width: "100%",
                    height: "888px",
                    borderRadius: "10px",
                }}
            ></div>
        </main>
    );
};

export default ContactUsMap;
