import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      &nbsp;
      <Link to="/blogs">Blogs</Link>
    </nav>
  );
};

export default Navbar;