import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./Page/About";
import Store from "./Page/Store";
import Home from "./Page/Home";
import ContactUs from "./Page/Contactus";
import ProductView from "./Page/ProductView";
import AuthForm from "./Page/AuthForm";
import Cart from "./Page/Cart"
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";

function App() {
  const [cartElements, setCartElements] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [userEmail, setUserEmail] = useState(""); // Add state to store user email

  useEffect(() => {
    setUserEmail("guptaashwin695gmailcom");
  }, []);

  /* const fetchProducts = () => {
    const endpoint = `/cart${userEmail}`;
    const apiUrl = `https://crudcrud.com/api/83fe011693c24cfa8577f2f168d2bb3f${endpoint}`;

    fetch(apiUrl)
    .then(response => {
      let result = response.json()
      setCartElements([result]);
      console.log("data", cartElements)
      if (!response.ok) {
        throw new Error('Something went wrong with cart');
      }
    })
    .catch(error => {
      console.error(error);
    });
  } */

  const addToCart = (product) => {
    setCartElements([...cartElements, { ...product, quantity: 1 }]);

    //const sanitizedEmail = sanitizeEmail(userEmail);
    const endpoint = `/cart${userEmail}`;
    const apiUrl = `https://crudcrud.com/api/83fe011693c24cfa8577f2f168d2bb3f${endpoint}`;

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cartItems: [...cartElements, { ...product, quantity: 1 }] }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to add product to cart');
      }
    })
    .catch(error => {
      console.error(error);
    });
  };

  const removeFromCart = (index) => {
    const updatedCart = [...cartElements];
    updatedCart.splice(index, 1);
    setCartElements(updatedCart);

    //const sanitizedEmail = sanitizeEmail(userEmail);
    const endpoint = `/cart${userEmail}`;
    const apiUrl = `https://crudcrud.com/api/83fe011693c24cfa8577f2f168d2bb3f${endpoint}`;

    fetch(apiUrl, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ cartItems: updatedCart }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to update cart');
      }
    })
    .catch(error => {
      console.error(error);
    });
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route element={<Home addToCart={addToCart} setIsCartOpen={setIsCartOpen} cartElements={cartElements} />} path="/home"></Route>
          <Route element={<About addToCart={addToCart} setIsCartOpen={setIsCartOpen} cartElements={cartElements} />} path="/about"></Route>
          <Route element={<Store addToCart={addToCart} setIsCartOpen={setIsCartOpen} cartElements={cartElements}  />} path="/store"></Route>
          <Route element={<ProductView addToCart={addToCart} setIsCartOpen={setIsCartOpen} cartElements={cartElements}  /> } path="/productview/:id/:title"></Route>
          <Route element={<AuthForm />} path="/"></Route>
          <Route element={<ContactUs />} path="/contactus"></Route>
        </Routes>
        {isCartOpen && (
          <Container className="mt-4 text-center">
            <Cart cartElements={cartElements} removeFromCart={removeFromCart} onHide={() => setIsCartOpen(false)} />
          </Container>
        )}
      </Router>
    </div>
  );
}

export default App;
