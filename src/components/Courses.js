import { Link, Outlet } from "react-router-dom";

export const Courses = () => {
  return (
    <>
      <div>
        <input type="search" placeholder="Search courses" />
      </div>
      <nav style={{ padding: 20, fontSize: 20 }}>
        <Link to="featured">Featured</Link>
        <Link to="new" style={{ marginLeft: 12 }}>
          New
        </Link>
      </nav>
      <Outlet/>
    </>
  );
};
