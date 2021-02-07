import React, { useState } from "react";
import { connect } from "react-redux";
import { addTech, getTechs } from "../../actions/TechActions";
import M from "materialize-css/dist/js/materialize.min.js";

const AddTechModal = ({ addTech, getTechs }) => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");

  const onSubmit = () => {
    if (FirstName === "" || LastName === "") {
      M.toast({ html: "Please provide a full name" });
    } else {
      const newTech = {
        firstName: FirstName,
        lastName: LastName,
      };
      addTech(newTech);
      getTechs();
      setFirstName("");
      setLastName("");
    }
  };
  return (
    <div id="tech-modal" className="modal">
      <div className="container">
        <h4>New Technician information</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="FirstName"
              value={FirstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
            />
            <label htmlFor="FirstName" className="active">
              FirstName
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="LastName"
              value={LastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
            />
            <label htmlFor="LastName" className="active">
              Last Name
            </label>
          </div>
        </div>
        <div className="modal-footer">
          <a
            href="#!"
            onClick={onSubmit}
            className="modal-close waves-effect waves-light btn blue "
          >
            Enter
          </a>
        </div>
      </div>
    </div>
  );
};

export default connect(null, { addTech, getTechs })(AddTechModal);
