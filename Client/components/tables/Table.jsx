// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "./Table.css";

// function Table() {
//   return (
//     <div>
//       <div className="table-div mt-4 container bg-warning p-2 rounded">
//         <table className="table table-striped">
//           <thead>
//             <tr>
//               <th scope="col">SL</th>
//               <th scope="col">Username</th>
//               <th scope="col">Email</th>
//               <th scope="col">Phone</th>
//               <th scope="col">Active Status</th>
//               <th scope="col">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>1</td>
//               <td>John Doe</td>
//               <td>john@example.com</td>
//               <td>123-456-7890</td>
//               <td>Active</td>
//               <td>
//                 <button className="btn btn-sm btn-warning">Edit</button>
//                 <button className="btn btn-sm btn-danger mt-1 ms-2">
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }

// export default Table;

// import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Table.css";
import UpdateUserModel from "../modals/update_user_model";
import DeleteModal from "../modals/DeleteModal";

function Table() {
  // const [selectedUser, setSelectedUser] = useState(null);

  // Sample data for table
  // const users = [
  //   {
  //     id: 1,
  //     username: "John Doe",
  //     email: "john@example.com",
  //     phone: "123-456-7890",
  //     status: "Active",
  //   },
  //   // Add more users as needed
  // ];

  // // Function to handle "Edit" button click
  // const handleEdit = (user) => {
  //   setSelectedUser(user); // Set the selected user for editing
  // };

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
                <button
                  className="btn btn-sm btn-warning"
                  // onClick={() => handleEdit(user)}
                  data-bs-toggle="modal"
                  data-bs-target="#editModal"
                >
                  Edit
                </button>
                <button
                  className="btn btn-sm btn-danger mt-1 ms-2"
                  data-bs-toggle="modal"
                  data-bs-target="#deleteModal"
                >
                  Delete
                </button>
              </td>
            </tr>
            {/* <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.status}</td>
              <td>
                <button
                  className="btn btn-sm btn-warning"
                  // onClick={() => handleEdit(user)}
                  data-bs-toggle="modal"
                  data-bs-target="#editModal"
                >
                  Edit
                </button>
                <button className="btn btn-sm btn-danger mt-1 ms-2">
                  Delete
                </button>
              </td>
            </tr> */}
            {/* {users.map((user, index) => (
              
            ))} */}
          </tbody>
        </table>
      </div>

      <UpdateUserModel />
      <DeleteModal />

      {/* Edit Modal */}
      {/* {selectedUser && (
        
      )} */}
    </div>
  );
}

export default Table;
