import React from "react";
import Topbar from "@/components/Topbar";
import { Box, Container } from "@mui/system";
import { CssBaseline } from "@mui/material";

export default function resume() {
  return (
    <>
      <Topbar />
      <CssBaseline />
      <Container fixed>
        <Box sx={{ my: 10 }}>resume ja</Box>
      </Container>
    </>
  );
}
