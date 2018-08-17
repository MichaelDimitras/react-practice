import React from 'react';
import ListItem from './listItem.jsx';

const list = props => {
  return (
    <ul>
      {props.players.map((item, index) => <ListItem key={index} player={item}/>)}
    </ul>
  )
}

export default list;