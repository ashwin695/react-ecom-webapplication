import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Page/About";
import Store from "./Page/Store";
import Home from "./Page/Home";
import ContactUs from "./Page/Contactus";
import ProductView from "./Page/ProductView";
import AuthForm from "./Page/AuthForm";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Home />} path="/home"></Route>
          <Route element={<About />} path="/about"></Route>
          <Route element={<Store />} path="/store"></Route>
          <Route element={<ContactUs />} path="/contactus"></Route>
          <Route element={ <ProductView /> } path="/productview/:id/:title"></Route>
          <Route element={<AuthForm />} path="/"></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
