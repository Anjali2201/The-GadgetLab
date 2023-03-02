import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ButtonGroup, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import getCookie from "../hooks/getCookie";
import removeCookie from "../hooks/removeCookie";
import logo from "./Assets/logo.png";

const btn = {
  marginRight: "20px",
  color: "black",
  backgroundColor: "transparent",

  "&:hover": {
    backgroundColor: "#F9A826",
    color: "black",
  },
};

const buttons = ["Feed", "Login", "Register"];
let token = getCookie("login");
let username = "";
if (token) {
  username = JSON.parse(getCookie("login")).username;
}
console.log(username);

const logout = () => {
  let token = getCookie("login");
  if (token) {
    removeCookie("login");
    window.location.reload();
  }
};
export default function Appbar() {
  return (
    <AppBar
      sx={{
        backgroundColor: "transparent",
        height: "180px",
        boxShadow: "none",
      }}
    >
      <Toolbar
        sx={{
          m: 2,
          backgroundColor: "#FAFAFF",
          borderRadius: "10px",
          py: 1,
          boxShadow: "1px 1px 1px 1px #DADDD8",
        }}
      >
        <Grid
          container
          sx={{
            alignItems: "center",
            justifyContent: "left",
          }}
        >
          <img src={logo} alt="logo" style={{ height: "50px" }} />
          <Link to="/" style={{ textDecoration: "none", color: "black" }}>
            <Typography
              sx={{
                fontSize: "1rem",
                fontWeight: "bold",
                letterSpacing: "0.1rem",
                ml: 2,
                color: "black",
                display: {
                  xs: "none",
                  sm: "none",
                  md: "block",
                  lg: "block",
                },
              }}
            >
              Gadget Reviewer
            </Typography>
          </Link>
        </Grid>

        {!token ? (
          <ButtonGroup variant="text">
            {buttons.map((button) => (
              <Link
                to={`/${button.toLowerCase()}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <Button sx={btn}>{button}</Button>
              </Link>
            ))}
          </ButtonGroup>
        ) : (
          <ButtonGroup variant="text" sx={{ mt: 1 }}>
            <Link to="/feed" style={{ textDecoration: "none", color: "black" }}>
              <Button sx={btn}>Feed</Button>
            </Link>
            <Button sx={btn} onClick={logout}>
              Logout
            </Button>
            {/* <Button sx={btn}>{username}</Button> */}
          </ButtonGroup>
        )}
      </Toolbar>
    </AppBar>
  );
}
