import React from 'react';
import { marked } from 'marked';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        markdown: initialMarkdown,
      };
      this.handleChange = this.handleChange.bind(this);
      this.clearEditor = this.clearEditor.bind(this);
    }
    
    handleChange(e) {
      this.setState({ markdown: e.target.value });
    }

    clearEditor() {
        this.setState({ markdown: ''});
    }
  
    render() {
      return (
        <div id="wrapper">
          <h1>Markdown Previewer</h1>
          <div id="container">
            <div className="section-container">
              <label>Markdown</label>
              <Editor markdown={this.state.markdown} onChange={this.handleChange} />
              <button onClick={this.clearEditor}>Clear!</button>
            </div>
            <div className="section-container">
              <label>Preview</label>
              <Display markdown={this.state.markdown} />
            </div>          
          </div>
        </div>
      );
    }
}
  
// editor and md display will be functional components
const Editor = (props) => {
  return (
  <textarea 
    id="editor" type="text" value={props.markdown} onChange={props.onChange}>
  </textarea>
    );
};

const Display = (props) => {
  return (
  <div>
      <div dangerouslySetInnerHTML={{ __html: marked(props.markdown) }} id="preview"></div>
  </div>
  )
}

const initialMarkdown = `
# This is a markdown Previewing app!
## Type your markdown into this box and it will update over on the display to the right.
My method for making this was **simple**:
- Create a React Component for the app
- Use _stateless functional components_ for the Editor and the Display
- Use the [marked library](https://marked.js.org/) to handle the Markdown

It handles inline and block code elements:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

And blockquote:
> Here's some block quote

And pictures:
![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`
  
export default App;