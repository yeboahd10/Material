import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import pro from "../components/pro1.png";
import {
  Stack,
  Card,
  
  Grid,
  Paper,
  CardHeader,
  Container,
} from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, p: 0 }}>
      <AppBar position="sticky">
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
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "900" }}
          >
            P-DAN TECH
          </Typography>
          <Button color="inherit">
            <LogoutIcon></LogoutIcon>
          </Button>
        </Toolbar>
      </AppBar>
      <Box>
        <Stack direction="row" spacing={1} sx={{ p: 2 }}>
          <AccountCircleIcon sx={{ color: "black", fontSize: "2rem" }} />
          <Typography variant="h5" sx={{ fontWeight: "800" }}>
            DASHBOARD
          </Typography>
        </Stack>
        <Box
          width="250px"
      
          sx={{
            p: 2,
            
            
            height: "370px",
            minWidth: "290px",
            margin: "2px",
            
          }}
        >
          <Stack direction="column" spacing={1}edge='start' textAlign='left'>
            <Typography variant="h5"> ID:</Typography>
            <Typography variant="h5"> Progress:</Typography>
            <img src={pro} width='300px'/>
          </Stack>
         
          <Stack direction="row">
          
          </Stack>
          <Container sx={{ position: "absolute" }}>
            <Grid container spacing={1}>
              <Grid item xs={10}>
                <Paper>
                  <Card>
                    <CardHeader
                      title=" Profile"
                      subheader=" complete profile"
                    />
                  </Card>
                </Paper>
              </Grid>
              <Grid item xs={10}>
                <Paper>
                  <Card>
                    <CardHeader
                      title=" Score"
                      subheader="Click to see your scores"
                    />
                  </Card>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>

      
      </Box>
    </Box>
  );
}
