import logo from './logo.svg';
import './App.css';
import React from 'react';
import Box from './Box';
import Stats from './Stats';

  
  class App extends React.Component {
  state = {
      boxes: [
          {
              id: 1,
              heading: "First Heading",
              color: "black"
          },
          {
              id: 2,
              heading: "Second Heading",
              color: "black"
          },
          {
              id: 3,
              heading: "Third Heading",
              color: "black"
          },
          {
              id: 4,
              heading: "Fourth Heading",
              color: "black"
          },
          {
              id: 5,
              heading: "Fifth Heading",
              color: "black"
          },
          {
              id: 6,
              heading: "Sixth Heading",
              color: "black"
          },
          {
            id: 7,
            heading: "Seventh Heading",
            color: "black"
        },
      ]
  };
  
  changeColor(id, color) {
    let boxes = this.state.boxes;
    boxes[id-1].color = color;
    this.setState({
        boxes: boxes
    });
  }
  
  render() {
      return (
          <div>
              <div className='row'>
                  {this.state.boxes.map( box =>
                      <div className='col'>
                          <Box
                              id={box.id}
                              heading={box.heading}
                              color={box.color}
                              changeColor={this.changeColor.bind(this)}
                          />
                      </div>
                  )}
              </div>
              <div className='row'>
                  <Stats boxes={this.state.boxes}/>
              </div>
          </div>
      );
  }
  }
  

  
  export default App;