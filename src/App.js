import React from 'react';
import logo from './logo.svg';
import './App.css';
import ArabicConverter from './ArabicConverter';
import RomanConverter from './RomanConverter';

function App() {
  return (
    <React.Fragment>
       <RomanConverter/>
       <ArabicConverter/>
    </React.Fragment>
  );
}

export default App;
