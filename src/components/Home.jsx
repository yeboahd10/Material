
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';




export default function ButtonAppBar() {
    
  return (
    <Box  sx={{ flexGrow: 1,p:0 }}  >
      <AppBar position="sticky"  >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,fontWeight:'900' }}>
            P-DAN TECH
          </Typography>
          <Button color="inherit"><LogoutIcon></LogoutIcon></Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}