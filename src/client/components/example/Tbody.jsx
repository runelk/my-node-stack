import React from 'react';
import Row from './Row.jsx';

const Tbody = ({rows}) => {
  return (
    <tbody>
      {rows.map(row =>
        <Row key={row.id}
             url={row.url}
             text={row.text}
             name={row.name} />)}
    </tbody>
  )
}

export default Tbody;
