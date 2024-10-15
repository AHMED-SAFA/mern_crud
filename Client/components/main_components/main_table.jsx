import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AddUserModel from "../modals/add_user_modal";
import Table from "../tables/Table";

function MainTable() {
  return (
    <div className="container">
      {/* Modal Section */}
      <AddUserModel />

      {/* Table Section */}
      <Table />
    </div>
  );
}

export default MainTable;
