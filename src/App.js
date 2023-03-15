import { Routes, Route } from "react-router-dom";

import Products from "./components/Products";
import Login from "./components/Login";
import Registration from "./components/Registration";
import NotFound from "./components/NotFound";
import "./App.css";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Wrapper />}>
          <Route path="/products" element={<Products />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
