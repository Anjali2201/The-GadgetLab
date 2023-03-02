import React from "react";
import { Button, CardActions, CardHeader, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
import { Card, CardContent } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { Stack } from "@mui/system";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const Feedpage = () => {
  const [post, setMyData] = useState([]);
  const [setIsError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/post/")
      .then((response) => setMyData(response.data.posts))
      .catch((error) => setIsError(error.message));

    console.log(post);
  }, []);

  // "authoremail": "anjalikushwaha031@gmail.com",
  // "authorname": "Anjali Kushwaha",
  // "gadgetname": "Samsung M31",
  // "category": "Tablets",
  // "model": "M series",
  // "price": "13,000",
  // "review": "Good,Crisp AMOLED display,Excellent battery life,Decent performance,Good photo quality in daylight",
  // "rate": "3",
  // "_id": "63e40ee38ae613ad2518738e",
  // "__v": 0

  return (
    <div>
      <Grid
        container
        sx={{
          justifyContent: "center",
          px: 3,
          pb: 4,
          backgroundColor: "#FAFAFF",
          minHeight: "100vh",
          height: "auto",
        }}
      >
        {/* ------------------------------Heading---------------------------------- */}
        <Grid
          item
          xs={12}
          sx={{
            mt: "110px",
            mb: "10px",
            mx: "30px",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold" }}>
            Reviews
          </Typography>
        </Grid>

        {/* ------------------------------Chips---------------------------------- */}

        {/* <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            mb: "30px",
          }}
        >
          <ChipsArray />
        </Grid> */}

        {/* ------------------------------Left Bar---------------------------------- */}
        <Grid
          item
          xs={12}
          sm={2}
          md={2}
          sx={{
            borderRadius: "10px",
            alignItems: "center",
            p: 2,
          }}
        >
          <Link href="/newreview" underline="none" color="inherit">
            <Button
              sx={{
                mt: 10,
                color: "black",
                boxShadow: "none",
                fontSize: "20px",
                fontWeight: "bold",
                backgroundColor: "#F9A826",
                borderRadius: "10px",
                padding: "10px 20px",
              }}
            >
              Post a Review
            </Button>
          </Link>
        </Grid>

        {/* ------------------------------Post---------------------------------- */}
        <Grid
          item
          xs={12}
          sm={10}
          md={10}
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            rowGap: "30px",
            columnGap: "30px",
            justifyContent: "center",
          }}
        >
          {post.map((post) => (
            <Card
              sx={{
                minWidth: 350,
                maxWidth: 350,
                minHeight: 500,
                maxHeight: 500,
                p: 2,
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                alignItems: "center",
                borderRadius: "10px",
              }}
            >
              <CardHeader title={post.gadgetname} sx={{ color: "black" }} />
              {/* <Typography sx={{ color: "black" }}>{post.category}</Typography> */}

              {/* <Typography sx={{ color: "black" }}>{post.model}</Typography>
              <Typography sx={{ color: "black" }}>{post.price}</Typography>
              <Typography sx={{ color: "black" }}>{post.rate}</Typography>
             
              <Typography sx={{ color: "black" }}>{post.authoremail}</Typography> */}

              <CardContent>
                <Typography sx={{ color: "black" }}>
                  {post.review.slice(0, 100)} ...{" "}
                  <Link href="/review">Read More</Link>
                </Typography>
              </CardContent>
              <Typography
                sx={{
                  color: "black",
                  fontSize: "15px",
                }}
              >
                By{" "}
                <span style={{ fontWeight: "light" }}> {post.authorname}</span>
              </Typography>

              <CardActions sx={{ mt: "auto" }}>
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#83c5be",
                    }}
                  >
                    <ThumbUpIcon sx={{ color: "black" }} />
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      border: "1px solid black",
                      backgroundColor: "#DADDD8",
                    }}
                  >
                    <Typography sx={{ color: "black" }}>Comment</Typography>
                  </Button>
                </Stack>
              </CardActions>
            </Card>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Feedpage;
