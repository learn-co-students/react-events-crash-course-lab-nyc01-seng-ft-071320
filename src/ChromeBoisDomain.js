import React, { Component } from 'react';
import { drawChromeBoiAtCoords, toggleCycling, resize } from './canvasHelpers.js'


export default class ChromeBoisDomain extends Component {
  
  handleMouseMove = (event) => {
    drawChromeBoiAtCoords(event.clientX, event.clientY)
  }

  handleSize = (event) => {
    if(event.key == 'a')
      resize('+')
    if(event.key == 's')
      resize('-')
  }
  
  
  render() {
    return (
      <canvas 
        onKeyPress={this.handleSize}
        onClick={toggleCycling}
        onMouseMove={this.handleMouseMove}
        width='900'
        height='600'
        tabIndex="0">
      </canvas>
    )
  }
}
