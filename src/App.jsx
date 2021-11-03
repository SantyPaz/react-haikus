import "./App.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Main from "./layout/Main";
import LinkFooter from "./layout/LinkFooter";
import Home from "./home/Home";
function App() {
  return (
    <>
      <Header />
      <Main>
      <Home/>
      </Main>
      <Footer />
      <LinkFooter/>
    </>
  );
}

export default App;
