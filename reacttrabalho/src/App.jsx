import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Navbar from "./components/NavBar";
import { CartProvider } from "./context/CartContext";
import { CartContext } from "./context/CartContext";
import Ofertas from "./pages/Ofertas";
import Footer from "./components/Footer";




export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/ofertas" element={<Ofertas />} />
        </Routes>
         <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}
