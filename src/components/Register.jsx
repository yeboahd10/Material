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
import LOGO from "../components/LOGO.png";

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
            color: "black",
          }}
        >
          <Stack spacing={2}>
            <Stack alignItems='center' justifyContent='center' direction="row">
              <img src={LOGO} width="120px" alt="" />
            </Stack>

            <Typography variant="h4" fontWeight="900">
              SIGN UP
            </Typography>
            <Stack direction="column" spacing={2}>
              <TextField
                label="FIRST NAME"
                color="primary"
                InputLabelProps={{ style : {color: 'black'}}}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleIcon  sx={{color:'black'}}/>
                    </InputAdornment>
                  ),
                }}
                required
              ></TextField>
              <TextField
                label="LAST NAME"
                InputLabelProps={{ style : {color: 'black'}}}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircleIcon  sx={{color:'black'}}/>
                    </InputAdornment>
                  ),
                }}
              />
              <TextField
                label="EMAIL"
                type="email"
                InputLabelProps={{ style : {color: 'black'}}}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <EmailIcon sx={{color:'black'}}/>
                    </InputAdornment>
                  ),
                }}
              ></TextField>
              <TextField
                label="PASSWORD"
                InputLabelProps={{ style : {color: 'black'}}}
                type={show ? "text" : "password"}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <KeyIcon sx={{color:'black'}} />
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
              <Button variant="outlined" color="primary" onClick={handleLog}>
                LOG IN
              </Button>
            </Stack>
          </Stack>
        </Box>
      ) : (
        navigate("./Login")
      )}
    </>
  );
};
