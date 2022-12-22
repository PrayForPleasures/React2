import { makeStyles } from "@material-ui/core/styles";
import { Box, Container, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  typoStyle: {
    color: "whitesmoke",
    textAlign: "center",
  },
  boxStyle: {
    padding: "8px 0",
  },
  inputStyle: {
    color: "whitesmoke",
  },
  labelStyle: {
    color: "whitesmoke",
    marginRight: "8px",
    marginLeft: "4px",
  },
  formStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
}));
export const Checkeds = () => {
  const classes = useStyles();

  return (
    <Container>
      <Box className={classes.boxStyle}>
        <Typography className={classes.typoStyle}>
          &dArr; Сhoose languages you know &dArr;
        </Typography>
        <form className={classes.formStyle} action="">
          <input
            className={classes.inputStyle}
            type="checkbox"
            id="js"
            name="js"
          ></input>
          <label className={classes.labelStyle} for="js">
            JS
          </label>
          <input
            className={classes.inputStyle}
            type="checkbox"
            id="PHP"
            name="PHP"
          ></input>
          <label className={classes.labelStyle} for="PHP">
            PHP
          </label>
          <input
            className={classes.inputStyle}
            type="checkbox"
            id="Java"
            name="Java"
          ></input>
          <label className={classes.labelStyle} for="Java">
            Java
          </label>
          <input
            className={classes.inputStyle}
            type="checkbox"
            id="Python"
            name="Python"
          ></input>
          <label className={classes.labelStyle} for="Python">
            Python
          </label>

          <input
            className={classes.inputStyle}
            type="checkbox"
            id="Kotlin"
            name="Kotlin"
          ></input>
          <label className={classes.labelStyle} for="Kotlin">
            Kotlin
          </label>
        </form>
      </Box>
    </Container>
  );
};
