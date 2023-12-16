import {
  Typography,
  Stack,
  TextField,
  InputAdornment,
  Button,
  Box,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import KeyIcon from "@mui/icons-material/Key";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



export const Register = () => {
    const navigate = useNavigate(); 
  const [show, setShow] = useState(false);
  const [login, setLogin] = useState(true);

  const handleLog = () => {
    setLogin(false);
  };

  const showPassword = () => {
    setShow(!show);
  };
  return (
    <>
      {login ? (
        <Box
          sx={{
            backgroundColor: "white",
          }}
        >
          <Stack spacing={2}>
            <Typography variant="h5">SIGN UP</Typography>
            <Stack direction="column" spacing={2}>
              <TextField
                label="FIRST NAME"
                color="secondary"
                helperText="enter your name"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleIcon />
                    </InputAdornment>
                  ),
                }}
                required
              ></TextField>
              <TextField
                label="LAST NAME"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleIcon />
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="EMAIL"
                type="email"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon />
                    </InputAdornment>
                  ),
                }}
              ></TextField>
              <TextField
                label="PASSWORD"
                type={show ? "text" : "password"}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <KeyIcon />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <InputAdornment
                      position="end"
                      style={{ cursor: "pointer" }}
                    >
                      {show ? (
                        <VisibilityOffIcon onClick={showPassword} />
                      ) : (
                        <VisibilityIcon onClick={showPassword} />
                      )}
                    </InputAdornment>
                  ),
                }}
              ></TextField>

              <Button variant="contained"> SIGN UP</Button>
              <Button variant="outlined" color="success" onClick={handleLog}>
                LOG IN
              </Button>
            </Stack>
          </Stack>
        </Box>
      ) : (
       navigate('./Login')
      )}
    </>
  );
};
