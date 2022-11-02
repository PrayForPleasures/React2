import { Header } from "./components/Header";
import { UnderHeader } from "./components/UnderHeader";
import { MainContent } from "./components/MainContent";
import { Footer } from "./components/Footer";
import styles from "./index.css";
import { makeStyles } from "@material-ui/core/styles";
import backImg from "./imgs/grlime.jpg";

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
    <div
      className={classes.mainFeatures}
      style={{ backgroundImage: `url(${backImg})`, paddingBottom: "8px" }}
    >
      <Header></Header>
      <hr className="hr_style"></hr>
      <UnderHeader></UnderHeader>
      <hr className="hr_style"></hr>
      <MainContent></MainContent>
      <hr className="hr_style"></hr>
      <Footer></Footer>
      <hr className="hr_style"></hr>
    </div>
  );
}
export default App;
