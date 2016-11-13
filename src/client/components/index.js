import App from './App.jsx';
import React from 'react';
import {render} from 'react-dom';

const start = (nodeId) => {
  render(<App />, document.getElementById(nodeId));
}

export {start};
