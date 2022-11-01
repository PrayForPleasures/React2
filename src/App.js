import { Header } from "./components/Header";
import { UnderHeader } from "./components/UnderHeader";
import { MainContent } from "./components/MainContent";
import styles from "./index.css";

function App() {
  return (
    <>
      <Header></Header>
      <hr className="hr_style"></hr>
      <UnderHeader></UnderHeader>
      <hr className="hr_style"></hr>
      <MainContent></MainContent>
    </>
  );
}
export default App;
