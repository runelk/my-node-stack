import React from 'react';
import {render} from 'react-dom';
import {ExampleTable} from './example'

class App extends React.Component {
  render() {
    let rows = [
      {
        id: 33,
        url: "pouipoi",
        text: "poiucvxnzm",
        name: "vycuxiz"
      },
      {
        id: 35,
        url: "cnm,zxv",
        text: "vchzxuo",
        name: "uyvhcxzs"
      },
      {
        id: 36,
        url: "vnczxunvi",
        text: "8790as",
        name: "p98vczx"
      }
    ]

    return (
      <div className="app-main">
        <p> React is working! </p>
        <ExampleTable rows={rows} />
      </div>
    );
  }
}

export default App;
