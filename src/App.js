import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollTop";
import Home from "./Home/Home";
import Product from "./Product/Product";
import Navbar from "./Navbar/Navbar";

function App() {
  return (
    <>
      <Router basename="/EStore">
        <ScrollToTop />
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/:id/" element={<Product />} />
        </Routes>

      </Router>
    </>
  );
}

export default App;
