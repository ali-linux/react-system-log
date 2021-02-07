import React from "react";
import { connect } from "react-redux";
import { deleteLogs } from "../../actions/LogActions";
import Moment from "react-moment";
const LogItem = ({ log, deleteLogs }) => {
  const onDelete = (e) => {
    // we can delete the item from UI like this or we can delete it in the Reducer
    // e.target.parentElement.parentElement.parentElement.remove();
    deleteLogs(log.id);
  };
  return (
    <li className="collection-item">
      <div>
        <a
          href="#edit-log-modal"
          className={`modal-trigger ${
            log.attention ? "red-text" : "blue-text"
          }`}
        >
          {log.message}
        </a>
        <br />
        <span className="grey-text">
          <span className="black-text">ID#{log.id}</span> Last updated by{" "}
          <span className="black-text">{log.tech} </span>
          <Moment format="MMMM Do YYYY, h:mm:ss a">{log.date}</Moment>
        </span>
        <a href="#!" className="secondary-content" onClick={onDelete}>
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

export default connect(null, { deleteLogs })(LogItem);
