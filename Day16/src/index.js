import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Fact from './Factorial';
import Calci from './Calci';
import Operation from './operation';
import TextTransformer from './textTranform';
import Education from './UserData';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    { <Fact />}
    { <Calci num1="10" num2={2} />}
    { <Operation />}
    { <TextTransformer />}
    { <Education />}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
