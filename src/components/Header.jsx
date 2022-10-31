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
import backImg from "../imgs/greyback.jpg";

const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundImage: `url(${backImg})`,
    position: "static",
  },
  menuButtonOne: {
    marginRight: "8px",
    color: "whitesmoke",
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
