import { useState, useEffect } from "react";
import {
  Button,
  Container,
  Typography,
  Box,
  Paper,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import backImg from "../imgs/greyback.jpg";

const useStyles = makeStyles((theme) => ({
  mainFeatures: {
    position: "relative",
    color: "whitesmoke",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  mainFeaturesPosts: {
    position: "relative",
    padding: theme.spacing(3),
    display: "flex",
    flexDirection: "column",
  },
  buttonOne: {
    color: "whitesmoke",
    width: "100px",
    marginRight: "8px",
  },
  buttonTwo: {
    color: "lime",
    width: "100px",
  },
  secondText: {
    marginBottom: "16px",
  },
  mainContent: {},
}));

export const UnderHeader = () => {
  const [messages, setMessages] = useState();
  const classes = useStyles();

  return (
    <>
      <Box
        className={classes.mainFeatures}
        style={{ backgroundImage: `url(${backImg})`, paddingBottom: "8px" }}
      >
        <Container fixed>
          <Grid container>
            <Grid item md={6}>
              <div className={classes.mainFeaturesPosts}>
                <Typography variant="h5" color="inherit" gutterBottom>
                  Some text
                </Typography>
                <Typography variant="h6" className={classes.secondText}>
                  Here is another text <br></br> I came up with
                </Typography>
                <div>
                  <Button
                    className={classes.buttonOne}
                    color="inherit"
                    variant="outlined"
                  >
                    Click me
                  </Button>
                  <Button
                    className={classes.buttonTwo}
                    color="inherit"
                    variant="outlined"
                  >
                    Click me
                  </Button>
                </div>
              </div>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};
