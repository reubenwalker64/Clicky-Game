import React from 'react';
import "./Jumbotron.css";
{/*edit to match Title's index.js???*/}
const Jumbotron = (props) => (
<div className="jumbotron jumbotron-fluid">
  <div className="container text-center">
    <h1 className="display-4">Click a FEDC speaker!</h1>
    <p className="lead">Click on any speaker from the 2019 FEDC Conference to earn points, but don't click on anyone more than once!</p>
  </div>
</div>
);
export default Jumbotron;
