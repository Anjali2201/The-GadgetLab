import React from "react";
import { Divider, Grid, Paper, Typography } from "@mui/material";
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
          backgroundColor: "#EEF0F2",
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
            height: "auto",
            minHeight: "90vh",
          }}
        >
          <Grid item xs={10} sm={10} lg={4}>
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
              Review used gadgets. Help others make the right choice.
            </Typography>

            <Button
              sx={{
                mt: "20px",
                backgroundColor: "#F9A826",
                color: "black",
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
              display: {
                xs: "none",
                sm: "none",
                md: "none",
                lg: "block",
              },
            }}
          >
            <Lottie options={defaultOptions} height={600} />
          </Grid>
        </Grid>

        {/* <Divider
          sx={{ width: "90%", height: "1px", backgroundColor: "#DADDD8" }}
        /> */}
        {/* ----------------------------------- About -------------------------- */}

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
          {/* <Grid item xs={12}>
            <Typography
              variant="h4"
              sx={{ color: "black", m: 3, textAlign: "center" }}
            >
              About Us
            </Typography>
          </Grid> */}

          <Grid item xs={8} sx={{}}>
            <Typography
              sx={{
                color: "black",
                textAlign: "right",
                fontWeight: "bold",
                fontSize: "2rem",
              }}
            >
              Confused about which gadget to buy? 😕
            </Typography>

            <Typography
              sx={{
                color: "black",
                textAlign: "right",
                fontSize: "1.5rem",
                letterSpacing: "0.1rem",
                mt: "20px",
              }}
            >
              We are here to help you. <br />
              Find the best gadgets for your needs. <br />
              Read reviews from other users. <br />
            </Typography>
          </Grid>

          <Grid item xs={8}>
            <Typography
              sx={{
                color: "black",
                textAlign: "left",
                fontWeight: "bold",
                fontSize: "2rem",
              }}
            >
              Help others make the right choice. 😊
            </Typography>

            <Typography
              sx={{
                color: "black",
                textAlign: "left",
                fontSize: "1.5rem",
                mt: "20px",
              }}
            >
              Share your experience with others. <br />
              Help others make the right choice. <br />
              Write a review for a gadget you have used.
            </Typography>
          </Grid>
        </Grid>

        <Divider
          sx={{ width: "90%", height: "1px", backgroundColor: "#DADDD8" }}
        />
      </Grid>
    </div>
  );
};

export default homepage;
