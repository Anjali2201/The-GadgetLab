import React from "react";
import { Divider, Grid, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import "../../index.css";

const styles = {
  bg: {
    borderRadius: "10px",
    // boxShadow: "1px 1px 1px 1px #212225",
    // border: "1px solid white",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  btn: {
    marginRight: "20px",
    backgroundColor: "transparent",
    color: "white",
    boxShadow: "none",
    fontSize: "20px",

    "&:hover": {
      backgroundColor: "#212225",
    },
  },
};

const homepage = () => {
  return (
    <div>
      <Grid
        container
        xs={12}
        sx={{
          backgroundImage: "#EEF0F2",
          height: "auto",
          px: 4,
          py: 1,

          justifyContent: "center",
        }}
      >
        {/* ----------------------------------- Heading -------------------------- */}
        <Grid item xs={12} sx={styles.bg} marginTop="150px">
          <Typography
            variant="h3"
            sx={{
              color: "black",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Welcome to Gadget Reviewer
          </Typography>

          <Typography variant="h5" sx={{ color: "black", textAlign: "center" }}>
            A place where you can review your gadgets and see what others have
            to say about them
          </Typography>
        </Grid>

        <Divider
          sx={{ width: "100%", height: "1px", backgroundColor: "black" }}
        />
        {/* ----------------------------------- About -------------------------- */}

        <Grid item xs={12} sx={styles.bg}>
          <Typography
            variant="h4"
            sx={{ color: "black", m: 3, textAlign: "center" }}
          >
            About Us
          </Typography>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" sx={styles.btn}>
              Explore
            </Button>
            <Button variant="contained" sx={styles.btn}>
              Join Us
            </Button>
          </Stack>
        </Grid>

        <Divider
          sx={{ width: "100%", height: "1px", backgroundColor: "white" }}
        />
      </Grid>
    </div>
  );
};

export default homepage;
