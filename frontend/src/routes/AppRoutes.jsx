import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import DilemmaDetails from "../pages/DilemmaDetails";
import Contribute from "../pages/Contribute";
import Leaderboard from "../pages/Leaderboard";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import NotFound from "../pages/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/dilemma/:slug" element={<DilemmaDetails />} />

        <Route path="/contribute" element={<Contribute />} />

        <Route path="/leaderboard" element={<Leaderboard />} />

        <Route path="/profile" element={<Profile />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;