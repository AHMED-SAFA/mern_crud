import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Header from "../components/header/header.jsx";
import Table from "../components/tables/Table.jsx";
import AddUserModal from "../components/modals/add_user_modal.jsx";

function App() {
  return (
    <div className="container">
      {/* Header Section */}
      <Header />

      {/* Modal Section */}
      <AddUserModal />

      {/* Table Section */}
      <Table />
    </div>
  );
}

export default App;
