import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./containers/Home";
import Login from "./containers/Login";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}