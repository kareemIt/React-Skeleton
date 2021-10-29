import React from 'react';
import './style.css';

const Skeleton = ({ type }) => {
  const classes = 'skeleton ' + type;

  return (
    <div className="ghost_card">
      <div className="image" />
      <div className="date" />
      <div className="title" />
      <div className="text" />
      <div className="learn_more" />
    </div>
  );
};

export default Skeleton;
