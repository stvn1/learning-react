import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import "bootstrap/dist/css/bootstrap.css";
//We import component from the component folder that we just created
import Counter from "./components/counter";
import Counter2 from "./pages/counter-conditionalRendering";
import Counter3 from "./pages/counter-handlingEvents";
import Counter4 from "./pages/counter-UpdatingState";
import Counter5 from "./pages/counter-passingArguments";
import Counter6 from "./pages/counter-composingComponents";

ReactDOM.render(<Counter6 />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
