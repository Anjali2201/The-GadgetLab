import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { ButtonGroup, Grid } from "@mui/material";
import { Link } from "react-router-dom";
import getCookie from "../hooks/getCookie";
import removeCookie from "../hooks/removeCookie";

const btn = {
  marginRight: "20px",
  backgroundColor: "transparent",
  color: "white",
  boxShadow: "none",
  fontSize: "20px",

  "&:hover": {
    backgroundColor: "#212225",
  },
};

const buttons = ["Feed", "Login", "Register"];
let token = getCookie("login");
let username = "";
if (token) {
  username = JSON.parse(getCookie("login")).name;
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
          backgroundColor: "#37393e",
          borderRadius: "10px",
          py: 1,
          boxShadow: "1px 1px 1px 1px #212225",
        }}
      >
        <Grid container>
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <Grid container xs={12}>
              <Grid item>
                <Typography color="white">Gadget Reviewer</Typography>
              </Grid>
            </Grid>
          </Link>
        </Grid>

        {!token ? (
          <ButtonGroup variant="text">
            {buttons.map((button) => (
              <Link
                to={`/${button.toLowerCase()}`}
                style={{ textDecoration: "none", color: "white" }}
              >
                <Button variant="contained" sx={btn}>
                  {button}
                </Button>
              </Link>
            ))}
          </ButtonGroup>
        ) : (
          <ButtonGroup variant="text" sx={{ mt: 1 }}>
            <Link to="/feed" style={{ textDecoration: "none", color: "white" }}>
              <Button sx={btn}>Feed</Button>
            </Link>
            <Button sx={btn} onClick={logout}>
              Logout
            </Button>
            <Button sx={btn}>{username}</Button>
          </ButtonGroup>
        )}
      </Toolbar>
    </AppBar>
  );
}