import { makeStyles } from "@material-ui/core/styles";
import imgFront from "../imgs/grlimered.jpg";
import { Container, Input } from "@material-ui/core";
import { connect } from "react-redux";
import { incrementLikes, decrementLikes } from "../store/actions";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: "24px",
    marginBottom: "24px",
  },
  imgDiv: {
    width: "250px",
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  imgLikes: { border: "1px solid whitesmoke", borderRadius: "3px" },
  like: {
    color: "whitesmoke",
    width: "60px",
    backgroundColor: "transparent",
    margin: "0 16px",
    border: "1px solid whitesmoke",
    borderRadius: "3px",
    "&:hover": {
      transition: "0.3s",
      border: "1px solid lime",
      borderRadius: "3px",
    },
  },
  dislike: {
    color: "whitesmoke",
    width: "60px",
    backgroundColor: "transparent",
    margin: "0 16px",
    border: "1px solid whitesmoke",
    borderRadius: "3px",
    "&:hover": {
      transition: "0.3s",
      border: "1px solid red",
      borderRadius: "3px",
    },
  },
  buttonDiv: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "4px",
  },
  likesCounter: {
    color: "whitesmoke",
    border: "1px solid whitesmoke",
    borderRadius: "3px",
    padding: "0 4px",
    marginTop: "4px",
    display: "flex",
    justifyContent: "center",
    width: "60%",
  },
  divCounter: {
    display: "flex",
    justifyContent: "center",
  },
  inputStyle: {
    color: "whitesmoke",
    marginTop: "4px",
    padding: "0 4px",
    width: "232px",
    "&:hover": {
      outline: "1px solid whitesmoke",
      borderRadius: "3px",
    },
  },
  divForInput: {
    display: "flex",
    justifyContent: "center",
  },
}));

const ImgLikes = (props) => {
  const classes = useStyles();

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <Container className={classes.container} maxWidth="md">
      <div className={classes.imgDiv}>
        <img className={classes.imgLikes} src={imgFront} alt="img" />
        <div className={classes.divForInput}>
          <Input
            disableUnderline={true}
            placeholder="Your Comment Should Be Here"
            className={classes.inputStyle}
            type="text"
            onChange={handleChange}
          />
        </div>

        <div className={classes.buttonDiv}>
          <button onClick={props.onIncrementLikes} className={classes.like}>
            &#10084;
          </button>
          <button onClick={props.onDecrementLikes} className={classes.dislike}>
            &#9785;
          </button>
        </div>
        <div className={classes.divCounter}>
          <div className={classes.likesCounter}>Likes : {props.likes} </div>
        </div>
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => {
  const { likesReducer } = state;
  return {
    likes: likesReducer.likes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementLikes: () => {
      return dispatch(incrementLikes());
    },
    onDecrementLikes: () => {
      return dispatch(decrementLikes());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImgLikes);
