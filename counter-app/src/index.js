import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "bootstrap/dist/css/bootstrap.css";
//We import component from the component folder that we just created
import Counter from "./components/counter";
import Counter2 from "./components/counter-conditionalRendering";
import Counter3 from "./components/counter-handlingEvents";
import Counter4 from "./components/counter-UpdatingState";

ReactDOM.render(<Counter4 />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
