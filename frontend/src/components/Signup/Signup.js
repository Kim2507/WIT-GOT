import React, { useRef } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fab from "@mui/material/Fab";
import "./Signup.css";
import signupGraphic from "../../assets/graphics/signup.png";
import TextField from "@mui/material/TextField";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  height: "70%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Signup() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const valueRef = useRef(""); //creating a refernce for TextField Component

  const sendValue = () => {
    return console.log(valueRef.current.value); //on clicking button accesing current value of TextField and outputing it to console
  };

  return (
    <div>
      <Fab
        onClick={handleOpen}
        sx={{ marginTop: 6, fontFamily: "Poppins" }}
        variant="extended"
        size="medium"
        color="#F08063"
        aria-label="add"
      >
        Sign Up
      </Fab>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div id="outer">
            <div class="sections" id="left">
              <img id="graphic" src={signupGraphic} alt="Logo" />
            </div>
            <div class="sections" id="right">
              <h1>Sign Up to &lt;GOT/&gt;</h1>
              <br />
              <br />
              <TextField
                id="email-bar"
                label="Email"
                type="search"
                variant="filled"
                inputRef={valueRef}
                sx={{
                  width: "40ch",
                }}
              />
              <br />
              <br />
              <TextField
                id="password-bar"
                label="Password"
                type="password"
                variant="filled"
                sx={{
                  width: "40ch",
                }}
              />
              <br />
              <br />

              <Fab
                onClick={sendValue}
                sx={{ marginTop: 6, fontFamily: "Poppins" }}
                variant="extended"
                size="medium"
                color="#f08063"
                aria-label="add"
              >
                Send
              </Fab>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
