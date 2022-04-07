import logo from "../assets/logos/logo.png";
import "./Header.css";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import { Stack } from "@mui/material";

function Header() {
  return (
    <div>
      <img height="150vmin" src={logo} alt="Logo" />
      <Stack
        sx={{ marginRight: 5 }}
        direction="row"
        justifyContent="flex-end"
        alignItems="flex-end"
        spacing={8}
      >
        <Fab
          sx={{ marginTop: 6 ,fontFamily:"Poppins"}}
          variant="extended"
          size="medium"
          color="F08063"
          aria-label="add"
        >
          Career Map
        </Fab>
        <Fab
          sx={{ marginTop: 6 ,fontFamily:"Poppins"}}
          variant="extended"
          size="medium"
          color="#F08063"
          aria-label="add"
        >
          Sign Up
        </Fab>
        <Fab
          sx={{ marginTop: 6,fontFamily:"Poppins" }}
          variant="extended"
          size="medium"
          color="#F08063"
          aria-label="add"
        >
          Login
        </Fab>
      </Stack>
    </div>
  );
}

export default Header;
