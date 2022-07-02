import React from "react";
import Topbar from "@/components/Topbar";
import { Box, Container } from "@mui/system";
import { CssBaseline } from "@mui/material";

export default function About() {
  return (
    <>
      <Topbar />
      <CssBaseline />
      <Container fixed>
        <Box sx={{ my: 10 }}>About</Box>
      </Container>
    </>
  );
}
