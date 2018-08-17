import React from 'react';

const listItem = props => {
  return (
    <li>
      <h3>{props.player.fname}</h3>
    </li>
  )
}

export default listItem;