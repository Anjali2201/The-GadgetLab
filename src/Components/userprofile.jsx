import React from "react";
import { Button, CardActions, CardHeader, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
import { Card, CardContent } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import getCookie from "../hooks/getCookie";

let token = getCookie("login");
let emailId = "";
let username = "";
if (token) {
  emailId = JSON.parse(token).email;
  username = JSON.parse(token).username;
  console.log(emailId);
}

const Userprofile = () => {
  const [post, setMyData] = useState([]);
  const [error, setIsError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000//api/post/getpostbyusername", {
        params: {
          email: emailId,
        },
      })
      .then((response) => setMyData(response.data.posts))
      .catch((error) => setIsError(error.message));
    console.log(error);
    console.log(emailId);
    console.log(post);
  }, []);

  return (
    <div>
      <Grid
        container
        xs={12}
        sx={{
          justifyContent: "center",
          height: "auto",
        }}
      >
        {/* --------------- CHips --------------------- */}

        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "auto",
            mt: "150px",
            mb: "50px",
          }}
        >
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
            Hello {username}!
          </Typography>

          {/* <ChipsArray /> */}
        </Grid>

        {/* ------------------------------Left Bar---------------------------------- */}
        <Grid
          item
          xs={12}
          sm={12}
          md={2}
          sx={{
            borderRadius: "10px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link href="/newreview" underline="none" color="inherit">
            <Button
              sx={{
                color: "black",
                fontSize: "15px",
                fontWeight: "bold",
                backgroundColor: "#F9A826",
                borderRadius: "10px",
                padding: "10px 20px",
                ml: "25%",
                mb: "10%",
                "&:hover": {
                  border: "1px solid black",
                },
              }}
            >
              Post a Review
            </Button>
          </Link>
        </Grid>
        {/* ------------------------------Right bar---------------------------------- */}
        <Grid
          item
          xs={11}
          sm={11}
          md={10}
          sx={{
            height: "auto",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            rowGap: "30px",
            columnGap: "30px",
            justifyContent: "center",
            backgroundColor: "#EEF0F2",
            alignItems: "center",
          }}
        >
          {post.map((post) => (
            <Grid
              item
              sx={{
                m: 2,
              }}
            >
              <Card
                sx={{
                  width: {
                    xs: "auto",
                    sm: "auto",
                    md: "300px",
                    lg: "400px",
                  },
                  height: "auto",
                  p: 2,
                  alignItems: "center",
                  borderRadius: "25px",
                  "&:hover": {
                    border: "1px solid black",
                    boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
                  },
                }}
              >
                <CardHeader title={post.gadgetname} />

                <CardContent>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "black",
                        fontSize: "15px",
                        fontWeight: "bold",
                        backgroundColor: "#83c5be",
                        borderRadius: "10px",
                        padding: "5px 10px",
                      }}
                    >
                      {post.category}
                    </Typography>
                    <Typography
                      sx={{
                        color: "black",
                        fontSize: "15px",
                        fontWeight: "bold",
                        backgroundColor: "#83c5be",
                        borderRadius: "10px",
                        padding: "5px 10px",
                      }}
                    >
                      {post.model}
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      my: "15px",
                    }}
                  >
                    <Typography
                      sx={{
                        color: "black",
                        fontSize: "16px",
                        backgroundColor: "#EEF0F2",
                        padding: "5px 10px",
                      }}
                    >
                      {post.review.slice(0, 100)} ... <br />
                      <Link
                        href={`/review/${post._id}`}
                        underline="none"
                        color="inherit"
                      >
                        <Button>
                          <Typography sx={{ fontSize: "16px" }}>
                            Read More
                          </Typography>
                        </Button>
                      </Link>
                    </Typography>
                    <Typography
                      sx={{
                        color: "black",
                        fontSize: "15px",
                        textAlign: "right",
                        mt: "10px",
                      }}
                    >
                      By{" "}
                      <span style={{ fontWeight: "light" }}>
                        {" "}
                        {post.authorname}
                      </span>
                    </Typography>
                  </Grid>
                </CardContent>

                <CardActions>
                  <Grid
                    container
                    xs={12}
                    sx={{
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Grid item>
                      <Button
                        variant="contained"
                        onClick={() => {
                          axios
                            .post(
                              "http://localhost:8000/api/post/like/" + post._id,
                              { emailId }
                            )
                            .then((response) => {
                              window.location.reload();
                              console.log(response);
                            })
                            .catch((error) => {
                              console.log(error);
                            });
                        }}
                        sx={{
                          mr: "10px",
                          color: "black",
                          backgroundColor: "transparent",
                        }}
                      >
                        <ThumbUpIcon
                          sx={{ color: "black", fontSize: "25px" }}
                        />
                        {post.likedUser.length}
                      </Button>

                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "transparent",
                          color: "black",
                        }}
                      >
                        <ChatBubbleIcon
                          sx={{ color: "black", fontSize: "25px" }}
                        />
                        {post.comments.length}
                      </Button>
                    </Grid>

                    <Grid item>
                      <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                        <span style={{ color: "#F9A826" }}>₹</span>
                        {post.price}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
        {/* -----------------------------Modal---------------------------------- */}
      </Grid>
    </div>
  );
};

export default Userprofile;
