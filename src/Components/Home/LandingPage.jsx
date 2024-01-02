import React from "react";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import gif from "../Assets/gif.gif";
const LandingPage = () => {
  return (
    <Grid
      container
      xs={12}
      sx={{
        justifyContent: "center",
        alignItems: "center",
        height: "auto",
        minHeight: "100vh",
      }}
    >
      {/* heading : The Gadget Lab */}
      <Grid item xs={10} sm={10} lg={5}>
        <Typography
          sx={{
            color: "black",
            textAlign: "right",
            fontSize: "3rem",
            fontWeight: "bold",
          }}
        >
          The Gadget
          <span style={{ color: "#F9A826" }}>Lab </span>
        </Typography>

        <Typography
          sx={{
            mt: "20px",
            color: "#35383e",
            textAlign: "right",
            fontSize: "1.5rem",
            // fontWeight: "bold",
            letterSpacing: "0.1rem",
          }}
        >
          "Your ultimate guide to the latest gadgets: Expert reviews,
          comparisons, and recommendations." <br />
          <Button
            href="/feed"
            sx={{
              mt: "20px",
              backgroundColor: "#F9A826",
              color: "black",
              fontSize: "1rem",
              fontWeight: "bold",
              letterSpacing: "0.1rem",
              borderRadius: "10px",
              padding: "10px 20px",
              width: "fit-content",

              "&:hover": {
                backgroundColor: "#fff",
                color: "black",
                border: "1px solid #F9A826",
              },
            }}
          >
            Explore
          </Button>
        </Typography>
      </Grid>

      {/* gif */}

      <Grid
        item
        lg={5}
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "none",
            lg: "block",
          },
        }}
      >
        <img src={gif} alt="animation" />
      </Grid>
    </Grid>
  );
};

export default LandingPage;
