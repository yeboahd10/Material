import {Box,TextField,InputAdornment,Stack,Typography,Button} from '@mui/material'
import KeyIcon from "@mui/icons-material/Key";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import LOGO from "../components/LOGO.png";
import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { database } from "./Firebase";
import { useNavigate } from 'react-router-dom'




export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(database, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/Home")
        console.log(user);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
    });
   
}
    const [show, setShow] = useState(false);

    const showPassword = () => {
      setShow(!show);
    };
  return (
    <Box>
      <Stack alignItems='center' justifyContent='center' direction="row">
              <img src={LOGO} width="120px" alt="" />
            </Stack>
        <Stack direction='column' spacing={2}>
        <Typography variant="h5" sx={{color: 'black', fontWeight: '900'}}>SIGN IN</Typography>
 <TextField
            label="EMAIL"
            type="email"
            onChange={(e)=>setEmail(e.target.value)}
            InputLabelProps={{ style : {color: 'black'}}}
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
            onChange={(e)=>setPassword(e.target.value)}
            InputLabelProps={{ style : {color: 'black'}}}
            type={show ? "text" : "password"}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <KeyIcon />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end" style={{ cursor: "pointer" }}>
                  {show ? (
                    <VisibilityOffIcon onClick={showPassword} />
                  ) : (
                    <VisibilityIcon onClick={showPassword} />
                  )}
                </InputAdornment>
              ),
            }}
          ></TextField>
           <Button variant="contained" onClick={onLogin}> SIGN IN</Button>
          <Typography variant='subtitle1' sx={{color:'black', fontStyle:'italic'}}>No Account Yet?</Typography>
          <Button variant='outlined' onClick={() => navigate('/')}>Sign Up</Button>
          </Stack>
          
  
    </Box>
  )
}
