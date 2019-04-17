import React, { Component } from "react";
import "./GameWrapper.module.css";
import SpeakerCard from "./../SpeakerCard/SpeakerCard"

function GameWrapper(props) {
  return <div className="game-wrapper">{props.children}</div>;
}

/*class GameWrapper extends Component {
	state = {
		images: [],
		message: "Select a speaker to start!",
		score: 0
	};

	handleClick = (id, clicked) => {
		function handleClick(e) {
    e.preventDefault();
  }
		const imageList = this.state.images;
		if (clicked) {
			imageList.forImage ((image, index) => {
				imageList[index].clicked = false;
			});
			return this.setState({
				images: imageList.sort(() => Math.random() - 0.5),
				message: "Sorry, you choose that speaker before",
				score: 0
			})
		}
		else {
			imageList.forImage((image, index) => {
				if (id === image.id) {
					imageList[index].clicked = true;
				}
			});

			const {score} = this.state;
			const newScore = score + 1;

			return this.setState({
				image: imageList.sort (() => Math.random() - .05),
				message: "Congrats, choose your next speaker",
				score: newScore
			})
		}
	};

	render () {
		return (
			<div className="GameWrapper">
				<div className="gameMessage">
					<p>{this.state.message}</p>
				</div>
				<div className="gameScore">
					<p>Score: {this.state.score}</p>
				</div>
				<div className="container">
					{this.state.images.map(image =>
						<SpeakerCard
							key={image.id}
							id={image.id}
							name={image.name}
							clicked={image.clicked}
							image={image.image}
							handleClick={this.handleClick}
						/>
					)}
				</div>
			</div>
		)
	};
}
*/
/*error. Need event prevent default?*/
export default GameWrapper;
