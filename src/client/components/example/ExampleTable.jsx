import React from 'react';
import Thead from './Thead.jsx';
import Tbody from './Tbody.jsx';

const ExampleTable = ({rows}) => {
  return (
    <table className="pure-table">
      <Thead />
      <Tbody rows={rows} />
    </table>
  )
}

export default ExampleTable;
