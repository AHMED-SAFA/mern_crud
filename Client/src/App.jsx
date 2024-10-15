import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Header from "../components/header/header.jsx";
import MainTable from "../components/main_components/main_table.jsx";

function App() {
  return (
    <div className="container">
      {/* Header Section */}
      <Header />

      {/* Table Section */}
      <MainTable />
    </div>
  );
}

export default App;
