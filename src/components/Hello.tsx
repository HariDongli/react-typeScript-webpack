
import * as React from "react";
const data = require('../dat/data.json');

export interface HelloProps { compiler: string; message: string; }

export const Hello = (props: HelloProps) =>

<h1>Hi  this is {props.compiler} and {props.message}!</h1>;

console.log(data);
