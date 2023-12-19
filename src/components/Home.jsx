import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import pro from "../components/pro2.png";
import { Stack, Paper, Container } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AddchartIcon from "@mui/icons-material/Addchart";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1, p: 0 }}>
      <AppBar position="sticky">
        <Toolbar>
          <IconButton
            size="large"
            edge="end"
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
        <Stack direction="row" spacing={14} sx={{ p: 2 }}>
          <Typography variant="h5" sx={{ fontWeight: "800" }}>
            DASHBOARD
          </Typography>
          <IconButton edge="end" size="small">
            <AccountCircleIcon sx={{ color: "black", fontSize: "2.5rem" }} />
          </IconButton>
        </Stack>
      </Box>
      <Container>
        <Paper
          elevation={5}
          sx={{
            borderRadius: "20px",
            padding: "10px",
            backgroundColor: "#03a9f4",
            height: "300px",
          }}
        >
          <Box
            sx={{
              height: "250px",
              borderRadius: "30px",
              color: "white",
             
            }}
          >
            <Stack spacing={0.7}>
              <Typography variant="h5" sx={{ textAlign: "left" , fontWeight:'800'}}>
                HI,
              </Typography>
              <Typography variant="h5" sx={{ textAlign: "left" , fontWeight:'800'}}>
                Your Score
              </Typography>
              <Stack direction="row" spacing={16}>
                <Typography variant="h1" sx={{ textAlign: "left" , fontWeight:'800'}}>
                  0
                </Typography>

                <AddchartIcon sx={{fontSize:'5rem'}}></AddchartIcon>
              </Stack>
              <Typography variant="h5" sx={{ textAlign: "left" , fontWeight:'800'}}>
                Progress
              </Typography>
              <img src={pro} />
            </Stack>
          </Box>
        </Paper>
      </Container>
    </Box>
  );
}
