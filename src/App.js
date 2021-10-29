import React from 'react';
import './style.css';
import Skeleton from './Component/Skeleton';

export default function App() {
  return (
    <div>
      <Skeleton type="text" />
      <Skeleton type="title" />
      <Skeleton type="thumbnail" />
      <h1>hi</h1>
    </div>
  );
}
