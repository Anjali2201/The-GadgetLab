import React from "react";
import { Grid, Typography } from "@mui/material";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import GradeIcon from "@mui/icons-material/Grade";
import GradingIcon from "@mui/icons-material/Grading";
import CompareIcon from "@mui/icons-material/Compare";

const data = [
  {
    id: 1,
    icon: <GradingIcon />,
    title: "User Reviews",
    text: "Post own reviews of gadgets you have tried and tested",
    color: "#caf0f8",
  },
  {
    id: 2,
    icon: <GradeIcon />,
    title: "Ratings",
    text: "Quickly identify which products are worth time and money.",
    color: "#e0e1dd",
  },
  {
    id: 3,
    icon: <CompareIcon />,
    title: "Compare",
    text: "Make informed decisions by weighing the pros and cons of each product.",
    color: "#bfd7ff",
  },
  {
    id: 4,
    icon: <MobileFriendlyIcon />,
    title: "Mobile Friendly",
    text: "Access our reviews on-the-go from their smartphones or tablets.",
    color: "#ffddd2",
  },
];

const styles = {
  features: {
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    height: "200px",
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
        {data.map((item) => (
          <Grid item key={item.id} sx={styles.features} bgcolor= {item.color}>
            <div>{item.icon}</div>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              {item.title}
            </Typography>
            <Typography variant="body1" sx={styles.text}>
              {item.text}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default About;
