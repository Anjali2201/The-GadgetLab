import React, { useRef } from "react";
import { useState } from "react";
import {
  Grid,
  Paper,
  TextField,
  Button,
  Typography,
  Modal,
  Box,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import getCookie from "../../hooks/getCookie";

const buttons = { margin: "8px", backgroundColor: "#1D3557" };
const text = { padding: 2, margin: "3px 0" };

var modalText = "Modal Open";

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

const textfield = {
  "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "white",
  },
  m: 1,
};

function Postreview() {
  const form = useRef();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [lastpage, setLastpage] = useState("/feed");
  const [message, setMessage] = useState("Proceed");
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const navigation = () => {
    if (lastpage === "/feed") {
      window.location.reload();
    } else {
      navigate(lastpage);
    }
  };
  let token = getCookie("login");
  let email = "";
  if (token) {
    email = JSON.parse(getCookie("login")).email;
  }
  const Createpost = async (e) => {
    e.preventDefault();
    console.log("FORM DATA");

    var form_data = {
      authoremail: email,
      gadgetname: form.current.gadgetname.value,
      category: form.current.category.value,
      model: form.current.model.value,
      link: form.current.link.value,
      price: form.current.price.value,
      description: form.current.review.value,
      rate: form.current.rate.value,
    };
    console.log(form_data);

    await axios
      .post("http://localhost:5000/api/post/newpost/", form_data)
      .then((response) => {
        console.log(response);
        modalText = "Post created successfully";
        setLastpage("/feed");
        setMessage("Proceed");
      })
      .catch((error) => {
        modalText = error.response.data;
        setLastpage("/newreview");
        setMessage("Try Again");
        console.log(error);
      });

    handleOpen();
  };

  return (
    <div style={{ height: "100vh" }}>
      <Grid container xs={12}>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: "linear-gradient(#2d2e33, #212225)",
            height: "100vh",
            p: 4,
          }}
        >
          <Typography
            variant="h3"
            style={{ color: "white", textAlign: "right" }}
          >
            Join Us! <br />
            Explore the world of Technologies <br />
          </Typography>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundImage: "linear-gradient(#2d2e33, #212225)",
          }}
        >
          <Paper
            style={{
              padding: 20,
              margin: "10px",
              height: "auto",
              width: "40%",
              backgroundColor: "#212225",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
                m: 2,
              }}
            >
              Post a new review
            </Typography>
            <form ref={form} onSubmit={Createpost}>
              <TextField
                type="text"
                name="gadgetname"
                fullWidth
                label={
                  <Typography style={{ color: "white" }}>
                    Gadget Name
                  </Typography>
                }
                sx={textfield}
              />
              <TextField
                type="text"
                name="category"
                fullWidth
                label={
                  <Typography style={{ color: "white" }}>
                    Enter category
                  </Typography>
                }
                placeholder="Enter category"
                sx={textfield}
              />
              <TextField
                type="text"
                name="model"
                fullWidth
                label={
                  <Typography style={{ color: "white" }}>
                    Enter model
                  </Typography>
                }
                placeholder="Enter model"
                sx={textfield}
              />
              <TextField
                type="text"
                name="link"
                fullWidth
                label={
                  <Typography style={{ color: "white" }}>Enter link</Typography>
                }
                placeholder="Enter link"
                sx={textfield}
              />
              <TextField
                type="text"
                name="price"
                fullWidth
                label={
                  <Typography style={{ color: "white" }}>
                    Enter price
                  </Typography>
                }
                placeholder="Enter link"
                sx={textfield}
              />
              <TextField
                type="text"
                name="review"
                fullWidth
                label={
                  <Typography style={{ color: "white" }}>
                    Enter review
                  </Typography>
                }
                placeholder="Enter review"
                sx={textfield}
              />
              <TextField
                type="text"
                name="rate"
                fullWidth
                label={
                  <Typography style={{ color: "white" }}>Enter rate</Typography>
                }
                placeholder="Enter rate"
                sx={textfield}
              />
              <Button
                style={buttons}
                type="submit"
                variant="contained"
                color="primary"
              >
                Post
              </Button>
            </form>
          </Paper>
        </Grid>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              {modalText}
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              <Button
                onClick={navigation}
                style={buttons}
                variant="contained"
                color="primary"
              >
                {message}
              </Button>
              {/* </Link> */}
            </Typography>
          </Box>
        </Modal>
      </Grid>
    </div>
  );
}

export default Postreview;
