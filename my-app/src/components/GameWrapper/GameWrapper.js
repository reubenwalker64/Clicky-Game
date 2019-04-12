import React from "react";
import "./GameWrapper.css";
{/*
function GameWrapper(props) {
  return <div className="game-wrapper">{props.children}</div>;
}
*/}
class GameWrapper extends Component {
	state = {
		images,
		message: "Select a speaker to start!",
		score: 0
	};

	handleClick = (id, clicked) => {
		const imageList = this.state.images;
		if (clicked) {
			imageList.forImage ((image, index) => {
				imageList[index].clicked = false;
			});
			return this.setState({
				image: imageList.sort(() => Math.random() - 0.5),
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
			
		)
	}

export default GameWrapper;
