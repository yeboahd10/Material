import {Box,TextField,InputAdornment,Stack,Typography,Button} from '@mui/material'
import KeyIcon from "@mui/icons-material/Key";
import EmailIcon from "@mui/icons-material/Email";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import LOGO from "../components/LOGO.png";



export const Login = () => {
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
           <Button variant="contained"> SIGN IN</Button>
          </Stack>
  
    </Box>
  )
}
