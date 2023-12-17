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
import { database } from "./Firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(database, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/Login");
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert("Email already registered Login");
        
      });
  };
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
            <Stack alignItems="center" justifyContent="center" direction="row">
              <img src={LOGO} width="120px" alt="" />
            </Stack>

            <Typography variant="h4" fontWeight="900">
              SIGN UP
            </Typography>
            <form>
              <Stack direction="column" spacing={2}>
                <TextField
                  label="FIRST NAME"
                  color="primary"
                  InputLabelProps={{ style: { color: "black" } }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircleIcon sx={{ color: "black" }} />
                      </InputAdornment>
                    ),
                  }}
                ></TextField>
                <TextField
                  label="LAST NAME"
                  InputLabelProps={{ style: { color: "black" } }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircleIcon sx={{ color: "black" }} />
                      </InputAdornment>
                    ),
                  }}
                />
                <TextField
                  label="EMAIL"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  InputLabelProps={{ style: { color: "black" } }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <EmailIcon sx={{ color: "black" }} />
                      </InputAdornment>
                    ),
                  }}
                ></TextField>
                <TextField
                  label="PASSWORD"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  InputLabelProps={{ style: { color: "black" } }}
                  type={show ? "text" : "password"}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <KeyIcon sx={{ color: "black" }} />
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

                <Button variant="contained" type="submit" onClick={onSubmit}>
                  SIGN UP
                </Button>

                <Button variant="outlined" color="primary" onClick={handleLog}>
                  LOG IN
                </Button>
                
              </Stack>
            </form>
          </Stack>
        </Box>
      ) : (
        navigate("./Login")
      )}
    </>
  );
};
