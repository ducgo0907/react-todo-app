import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
//component file
import TodoContainer from "./functionBased/components/TodoContainer";

//stylesheet
import "./functionBased/App.css"

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <Router>
            <TodoContainer />
        </Router>
    </React.StrictMode>
);