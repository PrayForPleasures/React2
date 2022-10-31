import {
  AppBar,
  Container,
  Toolbar,
  IconButton,
  Typography,
  Button,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#222222",
  },
  menuButtonOne: {
    marginRight: "8px",
  },
  menuButtonTwo: {
    color: "Lime",
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

export const Header = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Container fixed>
        <Toolbar className={classes.toolBar}>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Try to MUI</Typography>
          <Box>
            <Button
              color="inherit"
              variant="outlined"
              className={classes.menuButtonOne}
            >
              Log In
            </Button>
            <Button
              color="inherit"
              variant="outlined"
              className={classes.menuButtonTwo}
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
