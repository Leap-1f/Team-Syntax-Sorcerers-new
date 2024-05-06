import { Stack, Typography } from "@mui/material";
import { TbWorldPin } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";
import { TbPigMoney } from "react-icons/tb";

export const OurService = () => {
  const textTypo = {
    color: "#222",
    fontFamily: "Barlow",
    fontSize: "16px",
    fontStyle: "normal",
    fontWeight: 600,
    lineHeight: "19.2px",
  };
  const textTypoTwo = {
    color: "#666",
    fontFamily: "Inter",
    fontSize: "14.75px",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "26px",
  };
  return (
    <>
      <Stack
        width={"100%"}
        direction={"row"}
        justifyContent={"space-between"}
        paddingTop={"40px"}
        paddingBottom={"80px"}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={"10px"}>
          <TbWorldPin size={"100px"} />
          <Stack spacing={"10px"}>
            <Typography sx={textTypo}>FAST DELIVERY</Typography>
            <Typography sx={textTypoTwo}>
              Duis autem vel eum iriure dolor in hendrerit <br></br> velit esse
              molestie consequat.
            </Typography>
          </Stack>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} spacing={"10px"}>
          <RiCustomerService2Line size={"100px"} />
          <Stack spacing={"10px"}>
            <Typography sx={textTypo}>ONLINE SUPPORT 24/7</Typography>
            <Typography sx={textTypoTwo}>
              Duis autem vel eum iriure dolor in hendrerit <br></br> velit esse
              molestie consequat.
            </Typography>
          </Stack>
        </Stack>
        <Stack direction={"row"} alignItems={"center"} spacing={"10px"}>
          <TbPigMoney size={"100px"} />
          <Stack spacing={"10px"}>
            <Typography sx={textTypo}>MONEY RETURN GUARANTEE</Typography>
            <Typography sx={textTypoTwo}>
              Duis autem vel eum iriure dolor in hendrerit <br></br> velit esse
              molestie consequat.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
export default OurService;
