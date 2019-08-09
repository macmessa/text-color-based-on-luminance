import React, { Component } from 'react';
import { render } from 'react-dom';
import randomColor from 'randomcolor';
import Container from './components/Container';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      background: randomColor(),
    };
  }

  handleColorChange = e => {
    this.setState({
      background: randomColor()
    })
  }

  render() {
    return (
      <Container background={this.state.background}>
        <p>
          Change text color based on background luminance
        </p>
        <button onClick={this.handleColorChange}>Try a new color</button>
      </Container>
    );
  }
}

render(<App />, document.getElementById('root'));
