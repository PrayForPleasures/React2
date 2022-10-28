import {
  AppBar,
  Container,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import styles from "./index.css";
import { makeStyles } from "@material-ui/core/styles";

function App() {
  return (
    <AppBar position="fixed">
      <Container fixed>
        <Toolbar className="toolbar_style">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Try to MUI</Typography>
          <div>
            <Button color="inherit" variant="outlined" className="button_bar">
              Log In
            </Button>
            <Button color="inherit" variant="outlined">
              Sign Up
            </Button>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default App;
