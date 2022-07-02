import React from "react";
import Topbar from "@/components/Topbar";
import { Box, Container } from "@mui/system";
import { CssBaseline } from "@mui/material";

export default function cv() {
  return (
    <>
      <Topbar />
      <CssBaseline />
      <Container fixed>
        <Box sx={{ my: 10 }}>cv</Box>
      </Container>
    </>
  );
}
