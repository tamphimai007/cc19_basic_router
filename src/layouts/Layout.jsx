import { Outlet } from "react-router";
import MainNav from "../components/MainNav";
import About from "../pages/About";

// rfce
function Layout() {
  return (
    <div>
      <MainNav />
      <hr />
      <Outlet />
    </div>
  );
}
export default Layout;
