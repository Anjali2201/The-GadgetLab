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

function Signup() {
  const form = useRef();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [lastpage, setLastpage] = useState("/signup");
  const [message, setMessage] = useState("Proceed");
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const navigation = () => {
    if (lastpage === "/signup") {
      window.location.reload();
    } else {
      navigate(lastpage);
    }
  };

  // Register Function
  const RegisterUser = async (e) => {
    e.preventDefault();
    console.log("FORM DATA");
    var cpassword = form.current.confirm.value;
    var password = form.current.password.value;
    var form_data = {
      name: form.current.name.value,
      email: form.current.email.value,
      password: form.current.password.value,
    };
    console.log(form_data);

    if (password === cpassword) {
      await axios
        .post("http://localhost:5000/api/user/signup/", form_data)
        .then((response) => {
          console.log(response);
          modalText = "Registered Successfully";
          setLastpage("/login");
          setMessage("Proceed");
        })
        .catch((error) => {
          modalText = error.response.data;
          setLastpage("/signup");
          setMessage("Try Again");
          console.log(error);
        });
    } else {
      modalText = "Password Mismatched";
      setLastpage("/signup");
      setMessage("Try Again");
      console.log("Password Mismatched");
    }
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
              margin: "50px",
              height: "70%",
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
              Sign Up
            </Typography>
            <form ref={form} onSubmit={RegisterUser}>
              <TextField
                style={text}
                required
                name="name"
                fullWidth
                label={
                  <Typography style={{ color: "white" }}>Full Name</Typography>
                }
                sx={textfield}
              />

              <TextField
                style={text}
                required
                name="email"
                fullWidth
                label={
                  <Typography style={{ color: "white" }}>
                    Email Address
                  </Typography>
                }
                sx={textfield}
              />
              <TextField
                style={text}
                required
                name="password"
                type="password"
                fullWidth
                label={
                  <Typography style={{ color: "white" }}>Password</Typography>
                }
                sx={textfield}
              />
              <TextField
                style={text}
                required
                name="confirm"
                type="password"
                fullWidth
                label={
                  <Typography style={{ color: "white" }}>
                    Confirm Password
                  </Typography>
                }
                sx={textfield}
              />

              <Button
                sx={{
                  height: 70,
                  width: 190,
                  margin: "5px",
                  backgroundColor: "#37393e",
                  border: "none",
                  fontSize: 15,
                  color: "white",
                  "&:hover": {
                    border: "1px solid white",
                    backgroundColor: "#212225",
                  },
                }}
                type="submit"
                variant="contained"
                color="primary"
              >
                Sign up
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
              {/* <Link
                style={{ textDecoration: "None", color: "white" }}
                to={lastpage}
              > */}
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

export default Signup;
