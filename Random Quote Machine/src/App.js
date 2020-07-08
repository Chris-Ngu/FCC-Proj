// Work on retweet URI component redirect

import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

export default class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: 'DEFAULT QUOTE',
      author: 'DEFAULT AUTHOR',
      URI: ''
    }

    this.freeCodeCampChecker = this.freeCodeCampChecker.bind(this);
    this.generateQuote = this.generateQuote.bind(this);
    this.retweet = this.retweet.bind(this);
  }

  componentDidMount = () => {
    this.freeCodeCampChecker();
    this.generateQuote();
  }

  freeCodeCampChecker = () => {
    const script = document.createElement('script');

    script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    script.async = true;

    document.body.appendChild(script);
  }

  generateQuote = () => {
    // Pulls Information for http response, converts to usable json file, then finally usuable index of json

    fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
      .then((data) => data.json())
      .then((data) => {
        let selectedQuote = data.quotes[Math.floor(Math.random() * data.quotes.length)];

        this.setState({
          quote: selectedQuote.quote,
          author: selectedQuote.author,
          URI: "https://twitter.com/intent/tweet?text=" + encodeURIComponent('"' + selectedQuote + '" ' + this.state.author)
        });
      })
      .catch(() => {
        console.log("data could not be fetched!");
      })
  }
  retweet = () => {
    let link = "https://twitter.com/intent/tweet?text=" + encodeURIComponent('"' + this.state.quote + '" ' + this.state.author);

    return <Redirect to={link} />
  }

  render() {
    return (
      <div id="container">
        <div id="quote-box">
          <h1 id="text">{this.state.quote}</h1>
          <p id="author">{this.state.author}</p>
          <button id="new-quote" onClick={this.generateQuote}>
            Press to generate another quote
            </button>
            <br/>
          <a id='tweet-quote' href={this.state.URI}>
            TWEET ICON HERE
          </a>
        </div>
      </div>
    );
  }
}