import React, { Component } from 'react';
import './App.css';

import Leap from 'leapjs';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {};

    var self = this;

    Leap.loop(function(frame) {
      self.setState({
        frame: frame
      })
    });
  }

  componentDidUpdate() {
    var pane = document.getElementById('pane');
    var canvas = pane.getContext('2d');

    var frame = this.state.frame;
    for (var i = 0; i < frame.hands.length; i++) {
      var hand = frame.hands[i];

      var coordinates = hand.palmPosition;
      var x = 150 + coordinates[0];
      var y = coordinates[1];
      var z = coordinates[2];

      canvas.clearRect(0, 0, 400, 400);

      canvas.fillRect(x, 150 - y, 20 + z / 10.0, 20 + z / 10.0);
    }
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
