import "./App.css";
import "./assets/bootstrap-5.3.1-dist/css/bootstrap.min.css";
import "./assets/bootstrap-5.3.1-dist/js/bootstrap.bundle.min.js";
import Header from "./components/Header/Header.jsx";
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";
import ItemDetailContainer from "./pages/ItemDetailContainer/ItemDetailContainer.jsx"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

const App = () => {  
    return(
      <Router>
        <div className="App">
          <NavBar/>
          <Header/>
          <h1></h1>        
          <Routes>
            <Route path="/" element={<ItemListContainer/>} />
            <Route path="/detail/:id" element={<ItemDetailContainer/>} />
          </Routes>
        </div>

      </Router>
    );
  }

export default App
