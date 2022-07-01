import Head from "next/head";
import Image from "next/image";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

export default function Home() {
  return (
    <>
      <Topbar />
      <Box
        sx={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}>
        <Typography variant="body1" color="initial">
          Chonprakun Panetgul
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Avatar
            alt="Chonprakun Panetgul"
            src="/profile.jpg"
            sx={{ width: 100, height: 100 }}
          />
        </Box>
      </Box>
    </>
  );
}
