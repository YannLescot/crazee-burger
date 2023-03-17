import "./App.css";
import LoginPage from "./components/pages/login/LoginPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import OrderPage from "./components/pages/order/OrderPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route errorElement={<h1>404</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
