import ReactDOM from "react-dom";
import React from "react";
import Home from "./components/Home.jsx";

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<Home />, wrapper) : false;