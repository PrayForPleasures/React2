import { Header } from "./components/Header";
import { UnderHeader } from "./components/UnderHeader";
import { MainContent } from "./components/MainContent";
import { Footer } from "./components/Footer";
import styles from "./index.css";
import { makeStyles } from "@material-ui/core/styles";
import backImg from "./imgs/grlime.jpg";
import ImgLikes from "./components/ImgLikes";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducers } from "./store/reducers";

const store = createStore(reducers);
const useStyles = makeStyles((theme) => ({
  mainFeatures: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <div
        className={classes.mainFeatures}
        style={{ backgroundImage: `url(${backImg})`, paddingBottom: "8px" }}
      >
        <Header></Header>
        <hr className="hr_style"></hr>
        <ImgLikes></ImgLikes>
        <UnderHeader></UnderHeader>
        <hr className="hr_style"></hr>
        <MainContent></MainContent>
        <hr className="hr_style"></hr>
        <Footer></Footer>
        <hr className="hr_style"></hr>
      </div>
    </Provider>
  );
}
export default App;
