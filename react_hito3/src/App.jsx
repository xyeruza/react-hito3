import Navbar from "./components/Navbar";
//import Home from "./components/Home";
import Footer from "./components/Footer";
//import Register from "./components/Register";
//import Login from "./components/Login";
import Cart from "./components/Cart";
import pizzas from "./pizzas.json"
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      {/*<Home />*/}
      {/*<Register/>*/}
      {/*<Login/>*/}
      <Cart pizzas={pizzas}/>
      <Footer />
    </>
  );
}

export default App;
