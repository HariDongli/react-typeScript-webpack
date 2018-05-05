
import * as React from "react";
import * as ReactDOM from "react-dom";
// import d from "./dat/data.json";
import * as data from "./dat/data.json";
// a.primaryMain

import { Hello } from "./components/Hello";

// const data = require('./dat/data.json');
ReactDOM.render(
    <Hello compiler={data.name} message={data.message} />,
    document.getElementById("example")
);

