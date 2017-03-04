import React, { Component } from 'react';

import ReactLogo from './logo-react.svg';
import PdfJsLogo from './logo-pdfjs.svg';

import './App.css';

import PDF from '../../lib';

const URL = '//cdn.mozilla.net/pdfjs/tracemonkey.pdf';

class App extends Component {
  constructor() {
    super();

    this.onDocumentComplete = this.onDocumentComplete.bind(this);
    this.onPageComplete = this.onPageComplete.bind(this);
    this.onPageRender = this.onPageRender.bind(this);
    this.handlePageChange = this.handlePageChange.bind(this);

    this.state = {
      page: null,
      pages: null,
      rendered: false,
    };
  }

  onDocumentComplete(pages) {
    this.setState({ page: 1, pages });
  }

  onPageComplete(page) {
    this.setState({ page });
  }

  onPageRender() {
    this.setState({ rendered: true });
  }

  handlePageChange(nextPage) {
    this.setState({ page: nextPage, rendered: false });
  }

  renderPagination() {
    const { page, pages } = this.state;

    const previousButton = (
      <button
        disabled={page === 1}
        onClick={() => this.handlePageChange(page - 1)}
      >
        prev
      </button>
    );

    const nextButton = (
      <button
        disabled={page === pages}
        onClick={() => this.handlePageChange(page + 1)}
      >
        next
      </button>
    );

    return (
      <div>
        {previousButton} | {nextButton}
      </div>
    );
  }

  render() {
    const { pages, rendered } = this.state;

    const pagination = pages > 1 ? this.renderPagination() : null;
    const renderStatus = rendered ? null : 'Rendering...';

    return (
      <div className="App">
        <div className="App-header">
          <img src={ReactLogo} alt="react-logo" />
          <img src={PdfJsLogo} alt="pdf-js-logo" />

          <h2>Welcome to react-pdf-js Demo!</h2>
        </div>

        <div className="App-intro">
          {pagination}
          {renderStatus}

          <div className="App-pdf">
            <PDF
              file={URL}
              onDocumentComplete={this.onDocumentComplete}
              onPageComplete={this.onPageComplete}
              onPageRender={this.onPageRender}
              page={this.state.page}
            />
          </div>
        </div>
      </div>
    );
  }

}

export default App;
