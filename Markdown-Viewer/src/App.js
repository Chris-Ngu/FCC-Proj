import React from 'react';

export default class MarkdownViewer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    }

    this.freecodecampChecker = this.freeCodeCampChecker.bind(this);
    this.editorChange = this.editorChange.bind(this);
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

  editorChange = (e) => {
    this.setState({
      input: e.target.value
    });
  }

  render() {
    return (
      <div className="app-container">
        <div className="header">

        </div>
        <div className="editor">
          <textarea id="editor" onChange={this.editorChange}>

          </textarea>
        </div>
        <div className="preview" id="preview">
          {this.state.input}
        </div>
      </div>
    )
  }
}
