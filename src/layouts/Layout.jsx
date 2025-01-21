import { Outlet } from "react-router";

// rfce
function Layout() {
  return (
    <div>
      Layout
      <hr />
      <Outlet />
    </div>
  );
}
export default Layout;
