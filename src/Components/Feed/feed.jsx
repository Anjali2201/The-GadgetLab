import React from "react";
import { Button, Grid } from "@mui/material";
import Boxes from "./card";
import { Typography } from "@mui/material";
import ChipsArray from "./chips";
import { Link } from "@mui/material";

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
          container
          xs={12}
          sx={{
            display: "flex",
            mt: "110px",
            mb: "10px",
            mx: "30px",
          }}
        >
          <Grid
            item
            xs={5}
            sx={{
              display: "flex",
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
              justifyContent: "flex-end",
            }}
          >
            <Link href="/newreview" underline="none" color="inherit">
              <Button
                sx={{
                  background: "white",
                  color: "black",
                  boxShadow: "none",
                  fontSize: "20px",
                  "&:hover": {
                    backgroundColor: "#212225",
                  },
                }}
              >
                New Review
              </Button>
            </Link>
          </Grid>
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

          <Link href="/newreview" underline="none" color="inherit">
            <Button
              sx={{
                mt: 10,
                background: "white",
                color: "black",
                boxShadow: "none",
                fontSize: "20px",
                "&:hover": {
                  backgroundColor: "#212225",
                },
              }}
            >
              New Review
            </Button>
          </Link>
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
