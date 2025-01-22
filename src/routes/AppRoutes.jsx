// rfce
import { Link, Outlet, Route, Routes } from "react-router";
import MainNav from "../components/MainNav";
import Layout from "../layouts/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/admin/Dashboard";
import Manage from "../pages/admin/Manage";
import Setting from "../pages/admin/Setting";
import Recap from "../pages/Recap";
import RecapUseState from "../pages/RecapUseState";
import EasyZustand from "../pages/EasyZustand";
function AppRoutes() {
  return (
    <div>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />

          <Route path="recap" element={<Recap />} />
          <Route path="recap_state" element={<RecapUseState />} />
          <Route path="zustand" element={<EasyZustand />} />
        </Route>

        {/* Private */}
        <Route path="admin" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="manage" element={<Manage />} />
          <Route path="setting" element={<Setting />} />
        </Route>
      </Routes>
    </div>
  );
}
export default AppRoutes;
