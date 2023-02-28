import React from "react";
import { Button, CardHeader, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
import { Card, CardContent } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";

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
          backgroundImage: "linear-gradient(#2d2e33, #212225)",
        }}
      >
        {/* ------------------------------Heading---------------------------------- */}
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

        {/* ------------------------------Chips---------------------------------- */}
        {/* 
        <Grid
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

          {/* <Link href="/newreview" underline="none" color="inherit">
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
          </Link> */}
        </Grid>

        {/* ------------------------------Post---------------------------------- */}
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
                backgroundColor: "#212225",
                borderRadius: "10px",
                boxShadow: "0px 0px 10px 0px #000000",
                "&:hover": {
                  boxShadow: "0px 0px 10px 0px #ffffff",
                  cursor: "pointer",
                },
              }}
            >
              <CardHeader title={post.gadgetname} sx={{ color: "white" }} />
              {/* <Typography sx={{ color: "white" }}>{post.category}</Typography> */}

              {/* <Typography sx={{ color: "white" }}>{post.model}</Typography>
              <Typography sx={{ color: "white" }}>{post.price}</Typography>
              <Typography sx={{ color: "white" }}>{post.rate}</Typography>
             
              <Typography sx={{ color: "white" }}>{post.authoremail}</Typography> */}

              <CardContent>
                <Typography sx={{ color: "white" }}>{post.review}</Typography>
              </CardContent>
              <Typography
                sx={{
                  color: "white",
                  fontSize: "15px",
                }}
              >
                By{" "}
                <span style={{ fontWeight: "light" }}> {post.authorname}</span>
              </Typography>
            </Card>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};

export default Feedpage;
