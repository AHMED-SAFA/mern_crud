/* eslint-disable no-unused-vars */
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import axios from "axios";
import { Toaster, toast } from "react-hot-toast";
import { useState } from "react";

function AddUserModal() {
  const [value, setValues] = useState({
    username: "",
    email: "",
    phone: "",
    isActive: "",
  });

  const handleChange = (e) => {
    setValues({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const addUser = await axios.post(
        "http://localhost:4000/api/create-user",
        value
      );
      const response = addUser.data;
      if (response.success) {
        toast.success("User added successfully!");
        setValues({
          username: "",
          email: "",
          phone: "",
          isActive: "",
        });
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } else {
        toast.error("Failed to add user!");
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
    console.log(value);
  };

  return (
    <div>
      <Toaster position="top-right" reverseOrder={false} />
      <button
        type="button"
        className="btn btn-primary mt-4"
        data-bs-toggle="modal"
        data-bs-target="#staticBackdrop"
      >
        Add Application
      </button>

      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Add
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Username
                  </label>
                  <input
                    name="username"
                    value={value.username}
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="name"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    name="email"
                    value={value.email}
                    onChange={handleChange}
                    type="email"
                    className="form-control"
                    id="email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    name="phone"
                    value={value.phone}
                    onChange={handleChange}
                    type="tel"
                    className="form-control"
                    id="phone"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="active-status" className="form-label">
                    Active status
                  </label>
                  <input
                    name="isActive"
                    value={value.isActive}
                    onChange={handleChange}
                    type="text"
                    className="form-control"
                    id="active-text"
                    required
                  />
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
                    type="submit"
                    className="btn btn-primary"
                    data-bs-dismiss="modal"
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddUserModal;
