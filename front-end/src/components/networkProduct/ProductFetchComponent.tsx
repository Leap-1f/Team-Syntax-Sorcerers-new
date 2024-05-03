"use client";

export async function fetchProductData() {
  try {
    const response = await fetch("http://localhost:8080/api/product?limit=4", {
      mode: "cors",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log("Fetch data response: ", data);
    return data;
  } catch (error) {
    console.log(error);
  }
}
