import React from "react";

const react = (
  <div className="composed-logo">
    <img
      className="logotype2 select-disable"
      alt=""
      src={require("./react.png")}
    />
    React
  </div>
);
const all = <span>JavaScript</span>;
const redux = (
  <div className="composed-logo">
    <img
      alt=""
      className="logotype2 reduxlogo select-disable"
      src={require("./redux.png")}
    />
    Redux
  </div>
);

const express = <span className="express select-disable">Express</span>;
const mongodb = (
  <img
    alt=""
    className="logotype1 select-disable"
    src={require("./mongodb.png")}
  />
);
const jquery = (
  <img
    alt=""
    className="logotype1 jquery select-disable"
    src={require("./jquery.png")}
  />
);

export default { react, all, redux, express, mongodb, jquery };
