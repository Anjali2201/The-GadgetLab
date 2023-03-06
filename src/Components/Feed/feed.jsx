import React from "react";
import {
  Button,
  CardActions,
  CardHeader,
  CardMedia,
  Grid,
} from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
import { Card, CardContent } from "@mui/material";
import { useState, useEffect } from "react";
import axios from "axios";
import { Stack } from "@mui/system";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

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
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Grid
        container
        sx={{
          justifyContent: "center",
          px: 3,
          pb: 4,
          backgroundColor: "#EEF0F2",
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
                width: "400px",
                height: "auto",
                p: 3,
                display: "flex",
                flexDirection: "column",
                flexWrap: "wrap",
                alignItems: "center",
                borderRadius: "25px",
                // backgroundColor: "#EEF0F2",
              }}
            >
              <CardMedia
                component="img"
                height="140"
                image="https://th.bing.com/th/id/OIP.CIjnLNfuNOZ_71H2g1nE5gHaF7?pid=ImgDet&rs=1"
                alt="random"
              />
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
                    {post.review.slice(0, 100)} ...{" "}
                    <Button onClick={handleOpen}>Read More</Button>
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

              <CardActions sx={{ mt: "10px", p: 0 }}>
                <Grid
                  item
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "transparent",
                      mr: "10px",
                    }}
                  >
                    <ThumbUpIcon sx={{ color: "black", fontSize: "25px" }} />
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "transparent",
                    }}
                  >
                    <ChatBubbleIcon sx={{ color: "black", fontSize: "25px" }} />
                  </Button>
                </Grid>
              </CardActions>
            </Card>
          ))}
        </Grid>
        {/* -----------------------------Modal---------------------------------- */}
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </Box>
        </Modal>
      </Grid>
    </div>
  );
};

export default Feedpage;
