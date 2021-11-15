import "./App.css";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Main from "./layout/Main";
 import Home from './home/Home';
import Contactanos from '../src/home/contactos/Contactanos';


const App = () => {
  return (
    <>
      <Header />
      <Main>
         <Home/> 
        {/*<Contactanos />*/}
      </Main>
      <Footer />
    </>
  );
}

export default App;
