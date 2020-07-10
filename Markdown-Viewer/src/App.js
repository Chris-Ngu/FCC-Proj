import React from 'react';
let marked = require('marked');

marked.setOptions({
  breaks: true,
  tables: true,
  sanitize: true,
  langPrefix: true
});

export default class MarkdownViewer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: placeholder
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
          <h1>Chris's Markdown Previewer</h1>
        </div>
        <div className="editor">
          <textarea id="editor" onChange={this.editorChange} value={this.state.input}/>
        </div>
        <div className="preview" id="preview"
          dangerouslySetInnerHTML={{ __html: marked(this.state.input) }}>
        </div>
      </div>
    )
  }
}


const placeholder = 
`# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:
  
Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
  
You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`