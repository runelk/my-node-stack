import React from 'react';

const Row = ({url, text, name}) => {
  return (
    <tr>
      <td>{url}</td>
      <td>{text}</td>
      <td>{name}</td>
    </tr>
  )
}

export default Row;
