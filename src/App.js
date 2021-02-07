import React, { useEffect, Fragment } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import AddBtn from "./components/layout/AddBtn";
import AddLogModal from "./components/logs/AddLogModal";
import EditLogModal from "./components/logs/EditLogModal";
import AddTechModal from "./components/techs/AddTechModal";
import TechListModal from "./components/techs/TechListModal";
import { Provider } from "react-redux";
import store from "./store";
const App = () => {
  useEffect(() => {
    //init Materialize JS
    M.AutoInit();
    const b = document.getElementById("but");
    const testo = (e) => {
      b.style.backgroundColor = "blue";
    };
    b.addEventListener("click", testo);
  });
  return (
    <Provider store={store}>
      <Fragment>
        <SearchBar />
        <div className="container">
          <button type="button" id="but" style={testStyle}>
            test
          </button>
          <AddBtn />
          <AddLogModal />
          <EditLogModal />
          <AddTechModal />
          <TechListModal />
          <Logs />
        </div>
      </Fragment>
    </Provider>
  );
};

const testStyle = {
  width: "100px",
  height: "45px",
  background: "red",
  color: "white",
};
export default App;
