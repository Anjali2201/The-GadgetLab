import React from "react";
import { Divider, Grid, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "../../index.css";
import Lottie from "react-lottie";
import * as animationData from "../Assets/Smile2.json";

const homepage = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Grid
        container
        xs={12}
        sx={{
          backgroundImage: "#EEF0F2",
          height: "auto",

          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* ----------------------------------- Heading -------------------------- */}
        <Grid
          container
          xs={12}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Grid
            item
            xs={4}
            sx={{
              justifyContent: "right",
              alignItems: "right",
            }}
          >
            <Typography
              sx={{
                color: "black",
                textAlign: "right",
                fontSize: "5rem",
                fontWeight: "bold",
                letterSpacing: "0.1rem",
                lineHeight: "5rem",
              }}
            >
              Gadget <br />
              Reviewer
            </Typography>

            <Typography
              sx={{
                mt: "20px",
                color: "black",
                textAlign: "right",
                fontSize: "1.5rem",
                fontWeight: "bold",
                letterSpacing: "0.1rem",
              }}
            >
              Review your favourite gadgets, and get the best deals.
            </Typography>

            <Button
              sx={{
                mt: "20px",
                backgroundColor: "#F9A826",
                color: "black",
                textAlign: "right",
                fontSize: "1rem",
                fontWeight: "bold",
                letterSpacing: "0.1rem",
                borderRadius: "10px",
                padding: "10px 20px",
              }}
            >
              Explore
            </Button>
          </Grid>

          <Grid
            item
            xs={6}
            sx={{
              px: "20px",
              justifyContent: "left",
            }}
          >
            <Lottie options={defaultOptions} height={600} />
          </Grid>
        </Grid>

        <Divider
          sx={{ width: "90%", height: "1px", backgroundColor: "black" }}
        />
        {/* ----------------------------------- About -------------------------- */}

        <Grid item xs={12}>
          <Grid item xs={12}>
            <Typography
              variant="h4"
              sx={{ color: "black", m: 3, textAlign: "center" }}
            >
              About Us
            </Typography>
          </Grid>
        </Grid>
        {/* <Divider
          sx={{ width: "100%", height: "1px", backgroundColor: "white" }}
        /> */}
      </Grid>
    </div>
  );
};

export default homepage;
