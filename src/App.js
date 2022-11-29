import { Header } from "./components/Header";
import { UnderHeader } from "./components/UnderHeader";
import { MainContent } from "./components/MainContent";
import { Footer } from "./components/Footer";
import { makeStyles } from "@material-ui/core/styles";
import backImg from "./imgs/grlime.jpg";
import ImgLikes from "./components/ImgLikes";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { reducers } from "./store/reducers";
import { SimpleBreadcrumbs } from "./components/SimpleBreadcrumbs";
// import { nanoid } from "nanoid";

const store = createStore(reducers);
const useStyles = makeStyles((theme) => ({
  mainFeatures: {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  aButton: {
    color: "whitesmoke",
    textDecoration: "none",
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
        <hr className="hr_style"></hr>
        <Header></Header>
        <hr className="hr_style"></hr>
        <SimpleBreadcrumbs></SimpleBreadcrumbs>

        <UnderHeader></UnderHeader>
        <hr className="hr_style"></hr>
        <MainContent></MainContent>
        <hr className="hr_style"></hr>
        <div style={{ display: "flex" }}>
          <ImgLikes></ImgLikes>
        </div>
        <hr className="hr_style"></hr>
        <Footer></Footer>
        <hr className="hr_style"></hr>
      </div>
    </Provider>
  );
}
export default App;
