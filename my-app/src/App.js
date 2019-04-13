import React, { Component } from 'react';
import SpeakerCard from "./components/SpeakerCard/SpeakerCard";
import GameWrapper from "./components/GameWrapper/GameWrapper";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import Footer from "./components/Footer/Footer";
import speakers from "./speakers.json";

import './App.css';

class App extends Component {
  // Setting this.state.speakers to the speakers json array

    state = {
    speakers
  };


  removeSpeaker = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const speakers = this.state.speakers.filter(speaker => speaker.id !== id);
    // Set this.state.speakers equal to the new speakers array
    this.setState({ speakers });
  };

  // Map over this.state.speakers and render a SpeakerCard component for each speaker object
  render() {
    return (

      <GameWrapper>
        <Jumbotron>Speakers List</Jumbotron>
        {this.state.speakers.map(speaker => (
          <SpeakerCard
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
