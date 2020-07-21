import React from 'react';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      output: '',
      decimalCount: 1
    };

    this.freeCodeCampChecker = this.freeCodeCampChecker.bind(this);
    this.clearInput = this.clearInput.bind(this);
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

  clearInput = () => {
    this.setState({
      input: '0'
    })
  }

  append = (e) => {
    //handle one decimal point 
    //handle same opperands being pushed
    this.setState({
      input: this.state.input + ' ' + e.target.value
    });
  }

  calculate = () => {
    let array = this.state.input.split(' ').splice(1);

    let processedArray = [];
    let processedNumbers = [];

    let arrayToJoin = [];
    array.forEach((item) => {
      if (item != '*' ||item != '/' ||item != '+' ||item != '-'){
        arrayToJoin.push(item);
      }
      else {
        processedNumbers.push(arrayToJoin.join());
        arrayToJoin = [];
        processedArray.push(item);
      }
    });

    
  }

  render() {
    return (
      <body style={{ backgroundColor: 'red' }}>
        <div id="program-container" >
          <div id="calculator-container">
            <div id="display">
              <textarea readOnly
                style={{ width: '98%', height: '97%', resize: 'none' }}
                value={this.state.input}
              />
            </div>
            <div id="clear">
              <button
                style={{ width: '100%', height: '100%', backgroundColor: "red", color: 'white' }}
                onClick={this.clearInput}
              >
                CLEAR
            </button>
            </div>
            <div id="divide">
              <button
                style={{ width: '100%', height: '100%', backgroundColor: 'white' }}
                onClick={this.append}
                value={'/'}
              >
                /
            </button>
            </div>
            <div id="multiply">
              <button
                style={{ width: '100%', height: '100%', backgroundColor: 'white' }}
                onClick={this.append}
                value={'*'}>
                *
            </button>
            </div>
            <div id="seven">
              <button
                style={{ width: '100%', height: '100%', backgroundColor: 'black', color: 'white' }}
                onClick={this.append}
                value={'7'}>
                7
            </button>
            </div>
            <div id="eight">
              <button
                style={{ width: '100%', height: '100%', backgroundColor: 'black', color: 'white' }}
                onClick={this.append}
                value={'8'}>
                8
            </button>
            </div>
            <div id="nine">
              <button
                style={{ width: '100%', height: '100%', backgroundColor: 'black', color: 'white' }}
                onClick={this.append}
                value={'9'}>
                9
            </button>
            </div>
            <div id="subtract">
              <button
                style={{ width: '100%', height: '100%', backgroundColor: 'white' }}
                onClick={this.append}
                value={'-'}>
                -
            </button>
            </div>
            <div id="four">
              <button
                style={{ width: '100%', height: '100%', backgroundColor: 'black', color: 'white' }}
                onClick={this.append}
                value={'4'}>
                4
            </button>
            </div>
            <div id="five">
              <button
                style={{ width: '100%', height: '100%', backgroundColor: 'black', color: 'white' }}
                onClick={this.append}
                value={'5'}>
                5
            </button>
            </div>
            <div id="six">
              <button
                style={{ width: '100%', height: '100%', backgroundColor: 'black', color: 'white' }}
                onClick={this.append}
                value={'6'}>
                6
            </button>
            </div>
            <div id="add">
              <button
                style={{ width: '100%', height: '100%', backgroundColor: 'white' }}
                onClick={this.append}
                value={'+'}>
                +
            </button>
            </div>
            <div id="one">
              <button
                style={{ width: '100%', height: '100%', backgroundColor: 'black', color: 'white' }}
                onClick={this.append}
                value={'1'}
              >
                1
            </button>
            </div>
            <div id="two">
              <button
                style={{ width: '100%', height: '100%', backgroundColor: 'black', color: 'white' }}
                onClick={this.append}
                value={'2'}
              >
                2
            </button>
            </div>
            <div id="three">
              <button
                style={{ width: '100%', height: '100%', backgroundColor: 'black', color: 'white' }}
                onClick={this.append}
                value={'3'}
              >
                3
            </button>
            </div>
            <div id="equals">
              <button
                style={{ width: '100%', height: '100%', backgroundColor: 'blue', color: 'white' }}
                onClick={this.calculate}
              >
                =
            </button>
            </div>
            <div id="zero">
              <button
                style={{ width: '100%', height: '100%', backgroundColor: 'black', color: 'white' }}
                onClick={this.append}
                value={'0'}
              >
                0
            </button>
            </div>
            <div id="decimal">
              <button
                style={{ width: '100%', height: '100%', backgroundColor: 'black', color: 'white' }}
                onClick={this.append}
                value={'.'}
              >
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
