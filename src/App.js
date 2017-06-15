import React, { Component } from 'react';
import './App.css';

import Leap from 'leapjs';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};

    var self = this;

    Leap.loop(function(frame) {
      for (var i = 0; i < frame.hands.length; i++) {
        var hand = frame.hands[i];

        var coordinates = hand.palmPosition;
        var x = coordinates[0];
        var z = coordinates[2];

        self.setState({
          x: 150 + x,
          z: z
        });
      }
    });
  }

  componentDidUpdate() {
    var pane = document.getElementById('pane');
    var canvas = pane.getContext('2d');

    canvas.fillRect(this.state.x, this.state.z, 1, 1);
  }

  render() {
    return (
      <div className="App">
        <canvas id='pane'></canvas>
      </div>
    );
  }
}

export default App;
