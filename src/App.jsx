import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Closet from "./pages/Closet";
import Tech from "./pages/Tech";
import Collectors from "./pages/Collectors";
import Live from "./pages/Live";
import Product from "./pages/Product";
import About from "./pages/About";
import Cart from "./pages/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/shop" element={<Shop />} />

      <Route path="/closet" element={<Closet />} />

      <Route path="/tech" element={<Tech />} />

      <Route
        path="/collectors"
        element={<Collectors />}
      />

      <Route path="/live" element={<Live />} />

      <Route
        path="/product/:slug"
        element={<Product />}
      />

      <Route path="/about" element={<About />} />

      <Route path="/cart" element={<Cart />} />
    </Routes>
  );
}

export default App;