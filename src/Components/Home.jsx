// Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import data from '../data.json';

function Home() {
  return (
    <div>
      <h1>Items List</h1>
      <ul>
        {data.map(item => (
          <li key={item.name}>
              <Link to={`/${item.name.toLowerCase()}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
