import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import CustomThemeProvider from './Theme/CustomThemeProvider'
import CssBaseline from '@material-ui/core/CssBaseline'
ReactDOM.render(
 <React.StrictMode>
   <CustomThemeProvider>
    {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
    <CssBaseline />
    <App />
  </CustomThemeProvider>
  </React.StrictMode>
  ,document.getElementById('root')
);


/*Removed Strict Mode for local testing */
// ReactDOM.render(
//   
//     <CustomThemeProvider>
//      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
//      <CssBaseline />
//      <App />
//    </CustomThemeProvider>
//  
//    ,document.getElementById('root')
//  );
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
