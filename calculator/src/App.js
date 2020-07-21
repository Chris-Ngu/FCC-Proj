import React from 'react';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

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
    return (
      <body style={{backgroundColor: 'red'}}>
          <div id="program-container" >
          <div id="calculator-container">
            <div id="display">
              <textarea readOnly
                style={{ width: '98%', height: '97%', resize: 'none' }} />
            </div>
            <div id="clear">
              <button style={{ width: '100%', height: '100%', backgroundColor: "red", color: 'white' }}>
                CLEAR
            </button>
            </div>
            <div id="divide">
              <button style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
                /
            </button>
            </div>
            <div id="multiply">
              <button style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
                *
            </button>
            </div>
            <div id="seven">
              <button style={{ width: '100%', height: '100%', backgroundColor: 'black', color: 'white' }}>
                7
            </button>
            </div>
            <div id="eight">
              <button style={{ width: '100%', height: '100%', backgroundColor: 'black', color: 'white' }}>
                8
            </button>
            </div>
            <div id="nine">
              <button style={{ width: '100%', height: '100%', backgroundColor: 'black', color: 'white' }}>
                9
            </button>
            </div>
            <div id="subtract">
              <button style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
                -
            </button>
            </div>
            <div id="four">
              <button style={{ width: '100%', height: '100%', backgroundColor: 'black', color: 'white' }}>
                4
            </button>
            </div>
            <div id="five">
              <button style={{ width: '100%', height: '100%', backgroundColor: 'black', color: 'white' }}>
                5
            </button>
            </div>
            <div id="six">
              <button style={{ width: '100%', height: '100%', backgroundColor: 'black', color: 'white' }}>
                6
            </button>
            </div>
            <div id="add">
              <button style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
                +
            </button>
            </div>
            <div id="one">
              <button style={{ width: '100%', height: '100%', backgroundColor: 'black', color: 'white' }}>
                1
            </button>
            </div>
            <div id="two">
              <button style={{ width: '100%', height: '100%', backgroundColor: 'black', color: 'white' }}>
                2
            </button>
            </div>
            <div id="three">
              <button style={{ width: '100%', height: '100%', backgroundColor: 'black', color: 'white' }}>
                3
            </button>
            </div>
            <div id="equals">
              <button style={{ width: '100%', height: '100%', backgroundColor: 'blue', color: 'white' }}>
                =
            </button>
            </div>
            <div id="zero">
              <button style={{ width: '100%', height: '100%', backgroundColor: 'black', color: 'white' }}>
                0
            </button>
            </div>
            <div id="decimal">
              <button style={{ width: '100%', height: '100%', backgroundColor: 'black', color: 'white' }}>
                .
            </button>
            </div>
          </div>
          <footer style={{ textAlign: "center" }}>
            <a href="https://github.com/chris-ngu"><p>Created by Chris Nguyen</p></a>
          </footer>
        </div>
      </body>
    )
  }
}
