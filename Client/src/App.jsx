import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Header from "../components/header/header.jsx";
import Modal from "../components/modals/modal.jsx";
import Table from "../components/tables/Table.jsx";

function App() {
  return (
    <div className="container">
      {/* Header Section */}
      <Header />

      {/* Modal Section */}
      <Modal />

      {/* Table Section */}
      <Table />
    </div>
  );
}

export default App;
