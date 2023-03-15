import { Routes, Route } from "react-router-dom";
import Navigaion from "./components/Navigation";
import Products from "./components/Products";
import Login from "./components/Login";
import Registration from "./components/Registration";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigaion />}>
          <Route path="/signin" element={<Login />} />
          <Route path="/signup" element={<Registration />} />
          <Route path="/products" element={<Products />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
