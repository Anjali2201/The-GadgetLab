import React from "react";
import { Grid, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import gif from "../Assets/gif.gif";
const LandingPage = () => {
  return (
    <div>
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
        <Grid item xs={10} sm={10} lg={4}>
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
            comparisons, and recommendations."
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
            justifyContent: "center",
            alignItems: "center",
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
    </div>
  );
};

export default LandingPage;
