import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Promo from "./pages/Promo";
import Service from "./pages/Service";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/promo" element={<Promo />} />
      <Route path="/service" element={<Service />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
