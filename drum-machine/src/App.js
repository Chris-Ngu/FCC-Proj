import React from 'react';

export default class DrumMachine extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      volume: 0
    };

    this.freeCodeCampChecker = this.freeCodeCampChecker.bind(this);
  }

  componentDidMount = () => {
    this.freeCodeCampChecker();
  }

  freeCodeCampChecker = () => {
    const script = document.createElement('script');

    script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    return(
      <div id="drum-machine">
        <div id="display">

        </div>
      </div>
    )
  }
}
