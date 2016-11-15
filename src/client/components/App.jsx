import React from 'react';
import {render} from 'react-dom';
import {ExampleTable} from './example'

import superagent from 'superagent';


class App extends React.Component {
  constructor() {
    super();

    this.state = {rows: []};

    superagent
      .get('http://localhost:3001/api/examples')
      .end((err, res) => {
        if (!err && res) {
          console.log(res.body);
          this.setState({rows: res.body});
        } else {
          console.log('Ooopsidaisy');
        }
      })
  }

  render() {
    return (
      <div className="app-main">
        <ExampleTable rows={this.state.rows} />
      </div>
    );
  }
}

export default App;
