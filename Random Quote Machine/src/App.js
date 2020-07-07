import React, { useEffect } from 'react';

export default class QuoteMachine extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quote: '',
      author: ''
    }

    this.freeCodeCampChecker = this.freeCodeCampChecker.bind(this);
    this.generateQuote = this.generateQuote.bind(this);
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
    
    this.setState({
      quote: 'new Quote',
      author: 'new Author'
    });
  }

  render() {
    return (

      <div id="quote-box">
        <h1 id="text">"SAMPLE QUOTE HERE"</h1>
        <p id="author">-AUTHOR_HERE</p>
        <button id="new-quote" onClick={this.generateQuote} />
        <a id='tweet-quote' href="twitter.com/intent/tweet"></a>
      </div>
    );
  }
}
