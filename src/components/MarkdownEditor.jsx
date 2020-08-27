import React, {Component} from 'react';
import {Remarkable} from 'remarkable';

export default class MarkdownEditor extends Component {
  constructor(props) {
    super(props);
    this.md = new Remarkable();
    this.state = {
      text: '¡Hola **mundo**!',
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    e.preventDefault();
  };

  getRowMarkup() {
    return {
      __html: this.md.render(this.state.text),
    };
  }

  render() {
    return (
      <div>
        <h3>Input:</h3>
        <label htmlFor='markdown'>Introduce some text on markdown</label>
        <br />
        <textarea
          name='text'
          value={this.state.text}
          onChange={this.handleChange}
          id='markdown'
          cols='40'
          rows='5'
        ></textarea>
        <br />
        <h3>Output:</h3>
        <div dangerouslySetInnerHTML={this.getRowMarkup()}></div>
      </div>
    );
  }
}
