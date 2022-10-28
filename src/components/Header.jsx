import {
  AppBar,
  Container,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import styles from "../index";
import Box from "@material-ui/core/Box";

export const Header = () => {
  return (
    <AppBar position="fixed">
      <Container fixed>
        <Toolbar className="toolbar_style">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Try to MUI</Typography>
          <Box>
            <Button
              color="inherit"
              variant="outlined"
              style={{ marginRight: "10px" }}
            >
              Log In
            </Button>
            <Button color="inherit" variant="outlined">
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
