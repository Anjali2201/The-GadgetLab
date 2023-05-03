import React from "react";
import { Grid, Typography } from "@mui/material";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import GradeIcon from "@mui/icons-material/Grade";
import GradingIcon from "@mui/icons-material/Grading";
import CompareIcon from "@mui/icons-material/Compare";
const styles = {
  features: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "auto",
    width: "auto",
    p: 2,
    borderRadius: "25px",
    boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
  },

  text: {
    textAlign: "center",
    width: "80%",
    mt: 2,
  },
};
const About = () => {
  return (
    <div>
      <Grid
        container
        xs={12}
        sx={{
          justifyContent: "center",
          alignItems: "center",
          height: "auto",
          p: 2,
          my: 3,
        }}
      >
        {/* Items */}
        <Grid
          item
          xs={10}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(1, 1fr)",
              sm: "repeat(2, 1fr)",
              md: "repeat(2, 1fr)",
            },
            gap: "2rem",
          }}
        >
          {/* 1st item */}
          <Grid item sx={styles.features}>
            <GradingIcon
              sx={{
                fontSize: 80,
                color: "#457b9d",
              }}
            />
            <Typography
              sx={{
                color: "#000",
                fontWeight: "bold",
              }}
            >
              {" "}
              User Reviews
            </Typography>
            <Typography sx={styles.text}>
              Post own reviews of gadgets you have tried and tested
            </Typography>
          </Grid>

          {/* 2nd item */}
          <Grid item sx={styles.features}>
            <GradeIcon
              sx={{
                fontSize: 80,
                color: "#ffb703",
              }}
            />
            <Typography sx={{ color: "#000", fontWeight: "bold" }}>
              {" "}
              Ratings
            </Typography>

            <Typography sx={styles.text}>
              Quickly identify which products are worth time and money.
            </Typography>
          </Grid>

          {/* 3rd item */}
          <Grid item sx={styles.features}>
            <CompareIcon sx={{ fontSize: 80, color: "#2952e3" }} />
            <Typography sx={{ color: "#000", fontWeight: "bold" }}>
              {" "}
              Compare
            </Typography>

            <Typography sx={styles.text}>
              Make informed decisions by weighing the pros and cons of each
              product.
            </Typography>
          </Grid>

          {/* 4th item */}
          <Grid item sx={styles.features}>
            <MobileFriendlyIcon sx={{ fontSize: 80, color: "#588157" }} />
            <Typography sx={{ color: "#000", fontWeight: "bold" }}>
              {" "}
              Mobile Friendly
            </Typography>

            <Typography sx={styles.text}>
              Access our reviews on-the-go from their smartphones or tablets.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default About;
