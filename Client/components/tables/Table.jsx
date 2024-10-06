import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Table.css";

function Table() {
  return (
    <div>
      <div className="table-div mt-4 container bg-warning p-2 rounded">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">SL</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Phone</th>
              <th scope="col">Active Status</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>John Doe</td>
              <td>john@example.com</td>
              <td>123-456-7890</td>
              <td>Active</td>
              <td>
                <button className="btn btn-sm btn-warning">Edit</button>
                <button className="btn btn-sm btn-danger mt-1 ms-2">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
