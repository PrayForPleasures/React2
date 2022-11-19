import styles from "../index";
import { makeStyles } from "@material-ui/core/styles";
import img from "../imgs/grlimered.jpg";
import { Container } from "@material-ui/core";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: "24px",
  },
  imgDiv: {
    width: "200px",
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
    marginTop: "8px",
  },
  likesCounter: {
    color: "whitesmoke",
    border: "1px solid whitesmoke",
    borderRadius: "3px",
    padding: "0 4px",
    marginTop: "8px",
    display: "flex",
    justifyContent: "center",
    width: "60%",
  },
  divCounter: {
    display: "flex",
    justifyContent: "center",
  },
}));

const ImgLikes = (props) => {
  const classes = useStyles();

  return (
    <Container className={classes.container} maxWidth="md">
      <div className={classes.imgDiv}>
        <img className={classes.imgLikes} src={img} alt="photo" />
        <div className={classes.buttonDiv}>
          <button onClick={props.incrementLikes} className={classes.like}>
            &#10084;
          </button>
          <button onClick={props.decrementLikes} className={classes.dislike}>
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
    incrementLikes: () => {
      const action = { type: "INCREMENT" };
      dispatch(action);
    },
    decrementLikes: () => {
      const action = { type: "DECREMENT" };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ImgLikes);
