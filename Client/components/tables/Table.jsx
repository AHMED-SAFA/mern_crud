// /* eslint-disable no-unused-vars */
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
// import "./Table.css";
// import UpdateUserModel from "../modals/update_user_model";
// import DeleteModal from "../modals/DeleteModal";
// import { useEffect, useState } from "react";
// import axios from "axios";

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
//             {users.length > 0 ? (
//               users.map((user, index) => (
//                 <tr key={user.id}>
//                   <td>{index + 1}</td>
//                   <td>{user.username}</td>
//                   <td>{user.email}</td>
//                   <td>{user.phone}</td>
//                   <td>{user.isActive ? "Active" : "Inactive"}</td>
//                   <td>
//                     <button
//                       className="btn btn-sm btn-warning"
//                       data-bs-toggle="modal"
//                       data-bs-target="#editModal"
//                     >
//                       Edit
//                     </button>
//                     <button
//                       className="btn btn-sm btn-danger mt-1 ms-2"
//                       data-bs-toggle="modal"
//                       data-bs-target="#deleteModal"
//                     >
//                       Delete
//                     </button>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="6" className="text-center">
//                   No users found
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>

//       <UpdateUserModel />
//       <DeleteModal />
//     </div>
//   );
// }

// export default Table;

/* eslint-disable no-unused-vars */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./Table.css";
import UpdateUserModel from "../modals/update_user_model";
import DeleteModal from "../modals/DeleteModal";
import { useEffect, useState } from "react";
import axios from "axios";

function Table() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/get-user");
        setUsers(response.data.User);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching users", error);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <div className="table-div mt-4 container bg-warning p-2 rounded">
        {loading ? (
          <p className="text-center">Fetching data...</p>
        ) : (
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
              {users.length > 0 ? (
                users.map((user, index) => (
                  <tr key={user._id}>
                    <td>{index + 1}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.isActive ? "Active" : "Inactive"}</td>
                    <td>
                      <button
                        className="btn btn-sm btn-warning"
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
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center">
                    No users found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        )}
      </div>

      <UpdateUserModel />
      <DeleteModal />
    </div>
  );
}

export default Table;
