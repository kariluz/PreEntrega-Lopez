import React from "react";
import "./App.css";
import "./assets/bootstrap-5.3.1-dist/css/bootstrap.min.css";
import "./assets/bootstrap-5.3.1-dist/js/bootstrap.bundle.min.js";
import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer.jsx";

class App extends React.Component {
  render() {
    return(
      <div className="App">
        <NavBar/>
        <ItemListContainer greeting="Hacemos realidad tus sueños en T-shirt´s" />
        <h1></h1>
      </div>
    );
  }
}

export default App
