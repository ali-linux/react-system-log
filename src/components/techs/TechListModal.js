import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import TechItem from "./TechItem";
import { getTechs } from "../../actions/TechActions";

const TechListModal = ({ tech: { techs }, getTechs }) => {
  useEffect(() => {
    techs.map((t) => console.log(t.firstName, t.lastName));
    getTechs();
  }, []);
  // if (techs === null) {
  //   return <h1>Loding...</h1>;
  // }
  return (
    <div id="tech-list" className="modal">
      <div className="modal-content">
        <h4>Techniacian List</h4>
        <ul className="collection">
          {techs.map((tech) => (
            <TechItem tech={tech} key={tech.id} />
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tech: state.techFromReducer,
});
export default connect(mapStateToProps, { getTechs })(TechListModal);
