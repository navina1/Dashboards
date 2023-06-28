
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import About from "./Pages/About";
import Analytics from "./Pages/Analytics";
import Comment from "./Pages/Comment";
import Product from "./Pages/Product";
import ProductList from "./Pages/ProductList";
import Sidebar from "./Components/Sidebar";
function App() {
  return (
    <BrowserRouter>
      <Sidebar>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productlist" element={<ProductList />} />
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
}

export default App;
