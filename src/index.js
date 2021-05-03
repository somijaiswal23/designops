import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from 'react-router-dom';
import "./index.css";
import MainPage from "./MainPage";

ReactDOM.render(<BrowserRouter><MainPage /></BrowserRouter>, document.getElementById("root"));