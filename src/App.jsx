import "./App.css";
import Header from "./components/Header";
import NavigationMenu from "./components/NavigationMenu";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header title="My Blog" baseline="An awesome baseline" />
      <NavigationMenu />
      <Content />
      <Footer />
    </>
  );
}

export default App;
