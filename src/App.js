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

  	handleClick = (id, clicked) => {
  		function handleClick(e) {
      e.preventDefault();
    }
/*edit if statement - not working*/
  		const imageList = this.state.speakers;
  		if (clicked) {
  			imageList.forEach((image, index) => {
  				imageList[index].clicked = false;
  			});
  			return this.setState({
  				images: imageList.sort(() => Math.random() - 0.5),
  				message: "Sorry, you choose that speaker before",
  				score: 0
  			})
  		}
  		else {
  			imageList.forEach ((image, index) => {
  				if (id === image.id) {
  					imageList[index].clicked = true;
  				}
  			});

  			const {score} = this.state;
  			const newScore = score + 1;

  			return this.setState({
  				image: imageList.sort(() => Math.random() - 0.5),
  				message: "Congrats, choose your next speaker",
  				score: newScore
  			})
  		}
  	};

  // Map over this.state.speakers and render a SpeakerCard component for each speaker object
  render() {
    return (

      <div className="container-fluid GameWrapper">

        <Jumbotron>Speakers List</Jumbotron>
        <div className="gameMessage text-center">
          <p>{this.state.message}</p>
        </div>
        <div className="gameScore text-center">
          <h4>Score: {this.state.score}</h4>
        </div>
        <div className="allCards col-xs-6 col-sm-6 col-md-4 col-lg-3 col-xl-3">

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

      </div>
        <Footer>Footer Message</Footer>
      </div>

    );
  }
}

export default App;
