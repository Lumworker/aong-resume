import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { colors } from "@/utils/theme";
import router from "next/router";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

export default function FixedContainer() {
  const theme = useTheme();
  const isDownLg = useMediaQuery(theme.breakpoints.down("lg"));
  const isDownMd = useMediaQuery(theme.breakpoints.down("md"));
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
              top: "20em",
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
          <Box
            sx={{
              position: "absolute",
              right: 1,
              bottom: 1,
            }}>
            <Avatar
              alt="Chonprakun Panetgul"
              src="https://blush.design/api/download?shareUri=CEuDqr2W3&c=Hair_0%7E030067-0.4%7E870cf7_Skin_0%7E7b3d16-0.4%7Effcba7_Top_0%7Eff7475-0.4%7Eff0c0c&w=800&h=800&fm=png"
              sx={{
                ...(isDownLg
                  ? isDownMd
                    ? { width: 200, height: 200 }
                    : { width: 400, height: 400 }
                  : { width: 600, height: 600 }),
              }}
            />
          </Box>
        </Box>
      </Container>
    </>
  );
}
