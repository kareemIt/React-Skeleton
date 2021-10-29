import React from 'react';
import './style.css';

const Skeleton = ({ type }) => {
  const classes = 'skeleton.' + type;
  console.log(classes);

  return <div className={classes}></div>;
};

export default Skeleton;
