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
    position: "static",
    backgroundColor: "transparent",
  },
  menuButtonOne: {
    marginRight: "8px",
    color: "whitesmoke",
    "&:hover": {
      transition: "0.3s",
      transform: "scale(1.1)",
    },
  },
  menuButtonTwo: {
    color: "Lime",
    "&:hover": {
      transition: "0.3s",
      transform: "scale(1.1)",
    },
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

function handleClick(event) {
  event.preventDefault();
}

export const Header = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Container fixed>
        <Toolbar className={classes.toolBar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            style={{ marginRight: "5%" }}
          >
            <MenuIcon onClick={handleClick} />
          </IconButton>

          <Typography className="borderActive" variant="h6">
            Try to MUI
          </Typography>
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
