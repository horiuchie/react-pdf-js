# react-pdf-js

An enhanced version of [`react-pdf-js`](https://github.com/mikecousins/react-pdf-js), which provides a component for rendering PDF documents using [PDF.js](http://mozilla.github.io/pdf.js/).

## Installation

```bash
# Yarn
$ yarn add putdotio/react-pdf-js

# NPM
$ npm install putdotio/react-pdf-js --save
```

## Usage
There is a basic example on [examples folder](/example/src/App.jsx), which is also live [here](https://putdotio.github.io/react-pdf-js).


```js
propTypes = {
  content: React.PropTypes.string,
  documentInitParameters: React.PropTypes.shape({
    url: React.PropTypes.string,
  }),
  binaryContent: React.PropTypes.shape({
    data: React.PropTypes.any,
  }),
  file: React.PropTypes.any,
  loading: React.PropTypes.any,
  page: React.PropTypes.number,
  scale: React.PropTypes.number,
  rotate: React.PropTypes.number,
  onContentAvailable: React.PropTypes.func,
  onBinaryContentAvailable: React.PropTypes.func,
  binaryToBase64: React.PropTypes.func,
  onDocumentComplete: React.PropTypes.func,
  onPageComplete: React.PropTypes.func,
  onPageRender: React.PropTypes.func,
  className: React.PropTypes.string,
  style: React.PropTypes.object,
};
```
