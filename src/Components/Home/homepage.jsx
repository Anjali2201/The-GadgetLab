import React from "react";
import { Divider, Grid } from "@mui/material";
import LandingPage from "./LandingPage";
import About from "./About";

const homepage = () => {
  return (
    <div>
      <Grid
        container
        xs={12}
        sx={{
          backgroundColor: "#ffffff",
          height: "auto",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* ----------------------------------- Heading -------------------------- */}
        <LandingPage />
        <Divider
          sx={{ width: "90%", height: "1px", backgroundColor: "#DADDD8" }}
        />
        {/* ----------------------------------- About -------------------------- */}

        <About />
        <Divider
          sx={{ width: "90%", height: "1px", backgroundColor: "#DADDD8" }}
        />
      </Grid>
    </div>
  );
};

export default homepage;
