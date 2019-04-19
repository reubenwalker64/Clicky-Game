import React from 'react';
import "./Jumbotron.module.css";

const Jumbotron = (props) => (
<div className="jumbotron jumbotron-fluid">
  <div className="container text-center">
    <h1 className="display-4">Click a FEDC speaker!</h1>
		<hr />
		<p className="lead">Click on any speaker from the 2019 FEDC Conference to earn a point, but don't click on anyone more than once!</p>
		<p className="lead">See how many you can select without choosing a duplicate! Can you get to 12?</p>
	</div>
</div>
);
export default Jumbotron;
