import { useState, useEffect } from "react";
import { Button, Container, Typography, Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  mainFeatures: {
    position: "relative",
    color: "whitesmoke",
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
    "&:hover": {
      transition: "0.3s",
      transform: "scale(1.1)",
    },
  },
  buttonTwo: {
    color: "lime",
    width: "100px",
    "&:hover": {
      transition: "0.3s",
      transform: "scale(1.1)",
    },
  },
  secondText: {
    marginBottom: "16px",
    color: "whitesmoke",
  },
  mainContent: {},
}));

export const UnderHeader = () => {
  const [messages, setMessages] = useState();
  const classes = useStyles();

  return (
    <>
      <Box className={classes.mainFeatures} style={{ paddingBottom: "8px" }}>
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
