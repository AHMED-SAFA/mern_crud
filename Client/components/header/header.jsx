import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./header.css";

function Header() {
  return (
    <div className="header-div p-3 mt-2 rounded shadow">
      <h1 className="text-center">MERN CRUD Application</h1>
    </div>
  );
}

export default Header;
