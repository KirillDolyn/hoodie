import ButtomBar from "./components/buttonBar/ButtomBar";
import Content from "./components/content/Content";
import Header from "./components/header/Header";
import "./style/Index.scss";
function App() {
  return (
    <div className="wrapper">
      <Header />
      <Content />
      <ButtomBar />
    </div>
  );
}

export default App;
