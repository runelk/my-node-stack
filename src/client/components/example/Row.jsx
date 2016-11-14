import React from 'react';
import TdLink from './TdLink.jsx';

const Row = ({url, text, name}) => {
  return (
    <tr>
      <TdLink url={url} text={`OMG it's ${url}`} />
      <td>{text}</td>
      <td>{name}</td>
    </tr>
  )
}

export default Row;
