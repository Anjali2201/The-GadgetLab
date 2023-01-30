import React from "react";
import { Divider, Grid, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

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
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  height: "300px",
  width: "300px",
}));

const homepage = () => {
  return (
    <div>
      <Grid
        container
        xs={12}
        sx={{
          backgroundImage: "linear-gradient(#2d2e33, #212225)",
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
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Welcome to Gadget Reviewer
          </Typography>

          <Typography variant="h5" sx={{ color: "white", textAlign: "center" }}>
            A place where you can review your gadgets and see what others have
            to say about them
          </Typography>
        </Grid>

        <Divider
          sx={{ width: "100%", height: "1px", backgroundColor: "white" }}
        />
        {/* ----------------------------------- About -------------------------- */}

        <Grid item xs={12} sx={styles.bg}>
          <Typography
            variant="h4"
            sx={{ color: "white", m: 3, textAlign: "center" }}
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
        {/* ----------------------------------- Stats -------------------------- */}
        <Grid item xs={12} sx={styles.bg}>
          <Typography
            variant="h4"
            sx={{ color: "white", m: 3, textAlign: "center" }}
          >
            Stats
          </Typography>
          <Stack
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
            spacing={2}
            justifyContent="center"
          >
            <Item>Item 1</Item>
            <Item>Item 2</Item>
            <Item>Item 3</Item>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
};

export default homepage;
