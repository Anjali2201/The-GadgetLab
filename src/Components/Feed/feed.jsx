import React from "react";
import { Grid } from "@mui/material";
import Boxes from "./card";
import { Typography } from "@mui/material";
import ChipsArray from "./chips";

const Feedpage = () => {
  return (
    <div>
      <Grid
        container
        sx={{
          justifyContent: "center",
          px: 3,
          pb: 4,
          backgroundImage: "linear-gradient(#2d2e33, #212225)",
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            mt: "110px",
            mb: "10px",
            mx: "30px",
          }}
        >
          <Typography sx={{ color: "white", fontSize: "50px" }}>
            Feed{" "}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            mb: "30px",
          }}
        >
          <ChipsArray />
        </Grid>
        <Grid
          item
          xs={2}
          sx={{
            height: "100vh",
            backgroundColor: "#212225",
            display: "flex",

            borderRadius: "10px",
            boxShadow: "0px 0px 10px 0px #000000",
            justifyContent: "center",
          }}
        >
          <Typography sx={{ color: "white", my: 3 }}>Trending</Typography>
        </Grid>
        <Grid
          item
          xs={10}
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            rowGap: "30px",
            columnGap: "30px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Boxes />
          <Boxes />
          <Boxes />
          <Boxes />
          <Boxes />
          <Boxes />
          <Boxes />
          <Boxes />
        </Grid>
      </Grid>
    </div>
  );
};

export default Feedpage;
