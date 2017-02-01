import React, { Component } from 'react';

import ReactLogo from './logo-react.svg';
import PdfJsLogo from './logo-pdfjs.svg';

import './App.css';

import PDF from '../../lib';

const URL = '//cdn.mozilla.net/pdfjs/tracemonkey.pdf';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pages: 0,
      activePage: 0,
    };
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={ReactLogo} alt="react-logo" />
          <img src={PdfJsLogo} alt="pdf-js-logo" />

          <h2>Welcome to react-pdf-js Demo!</h2>
        </div>

        <div className="App-intro">
          <PDF file={URL} onPageRender={console.log} />
        </div>
      </div>
    );
  }
}

export default App;
