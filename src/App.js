import React from 'react';
import logo from './logo.svg';
import './App.css';
import ArabicConverter from './ArabicConverter';
import RomanConverter from './RomanConverter';
import Converter from './Converter';
import RomanSumator from './RomanSumator';

function App() {
  return (
    <React.Fragment>
       <Converter typeOfConverson="toRoman"/>
       <Converter typeOfConverson="toArabic"/>
       <RomanSumator/>
    </React.Fragment>
  );
}

export default App;
