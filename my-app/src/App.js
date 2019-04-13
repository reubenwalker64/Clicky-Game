import React, { Component } from 'react';
import SpeakerCard from "./components/SpeakerCard/index";
import GameWrapper from "./components/GameWrapper/GameWrapper";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Footer from "./components/Footer/Footer";
import speakers from "./speakers.json";

import './App.css';

class App extends Component {
  // Setting this.state.speakers to the speakers json array

    state = {
    speakers,
    message: "Select a speaker to start!",
    score: 0
  };


  removeSpeaker = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const speakers = this.state.speakers.filter(speaker => speaker.id !== id);
    // Set this.state.speakers equal to the new speakers array
    this.setState({ speakers });
  };



  	handleClick = (id, clicked) => {
  		function handleClick(e) {
      e.preventDefault();
    }
    alert ("clicked");

  		const imageList = this.state.speakers;
  		if (clicked) {
  			imageList.forSpeaker ((image, index) => {
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
/*
  	render () {
  		return (
  			<div className="GameWrapper">
  				<div className="gameMessage">
  					<p>{this.state.message}</p>
  				</div>
  				<div className="gameScore">
  					<p>Score: {this.state.score}</p>
  				</div>
/*  				<div className="container">
  					{this.state.speakers.map(image =>
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

  // Map over this.state.speakers and render a SpeakerCard component for each speaker object
  render() {
    return (

      <GameWrapper>
        <Jumbotron>Speakers List</Jumbotron>
        <div className="gameMessage">
          <p>{this.state.message}</p>
        </div>
        <div className="gameScore">
          <p>Score: {this.state.score}</p>
        </div>
        {this.state.speakers.map(speaker => (
          <SpeakerCard
            handleClick={this.handleClick}
            removeSpeaker={this.removeSpeaker}
            id={speaker.id}
            key={speaker.id}
            name={speaker.name}
            image={speaker.image}
            title={speaker.title}
            company={speaker.company}
          />
        ))}
        <Footer>Footer Message</Footer>
      </GameWrapper>

    );
  }
}

export default App;
