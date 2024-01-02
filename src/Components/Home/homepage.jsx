import React from "react";
import { Grid } from "@mui/material";
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

        {/* ----------------------------------- About -------------------------- */}

        <About />
      </Grid>
    </div>
  );
};

export default homepage;
