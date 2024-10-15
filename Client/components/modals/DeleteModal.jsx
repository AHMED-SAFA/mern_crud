/* eslint-disable no-unused-vars */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";



// eslint-disable-next-line react/prop-types
function DeleteModal({ userId }) {
  // Delete user function
  const deleteUser = async () => {
    try {
      const response = await axios.delete(
        `http://localhost:4000/api/delete-user/${userId}`
      );
      if (response) {
        toast.success("User deleted successfully!");
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } else {
        toast.error("Failed to delete user!");
      }
    } catch (error) {
      toast.error("Error deleting user!");
      console.error("Error deleting user:", error);
    }
  };

  return (
    <div>
      <div
        className="modal fade"
        id="deleteModal"
        tabIndex="-1"
        aria-labelledby="deleteModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="deleteModalLabel">
                Delete User
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <h3 className="text-danger text-center">
                Do you want to delete this user?
              </h3>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                type="button"
                className="btn btn-danger"
                data-bs-dismiss="modal"
                onClick={deleteUser}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
