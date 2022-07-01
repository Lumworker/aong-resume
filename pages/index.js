import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { colors } from "@/utils/theme";

export default function FixedContainer() {
  return (
    <>
      <CssBaseline />
      <Container fixed>
        <Box
          sx={{
            // bgcolor: "#cfe8fc",
            height: "100vh",
          }}>
          <Box
            sx={{
              position: "fixed",
              // top: "45%",
              top: "40%",
              // left: "50%",
              // transform: "translate(-50%, -50%)",
            }}>
            <Typography variant="h2" sx={{ fontWeight: 700 }} color={"primary"}>
              Chonprakun Panetgul
            </Typography>
            <Box sx={{ ml: 1, my: 3 }}>
              <Typography variant="h5" sx={{ fontStyle: "italic" }}>
                Programer Specialize In Web Development.
              </Typography>
              <ButtonGroup variant="text" size="large" sx={{ my: 4 }}>
                <Button
                  onClick={() => {
                    router.push("/Profile/resume");
                  }}>
                  {/* หน้าแรก */}
                  Home
                </Button>
                <Button>{/* เกี่ยวกับ */}About</Button>
                <Button>CV</Button>
                <Button>
                  {/* ติดต่อ */}
                  Contract
                </Button>
              </ButtonGroup>
              {/* <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Avatar
                alt="Chonprakun Panetgul"
                src="/profile.jpg"
                sx={{ width: 100, height: 100 }}
              />
            </Box> */}
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
}
