import { makeStyles } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from  './components/Header';
import CoinPage from './components/pages/CoinPage';
import HomePage from './components/pages/HomePage';

const useStyles = makeStyles(() => ({
  App: {
    backgroundColor: "#14161a",
    color: "white",
    minHeight: "100vh",
  },
}));

function App() {

  const classes = useStyles();

  return (
   <Router>
    <div className={classes.App}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/coins/:id" element={<CoinPage />} />
      </Routes>
    </div>
   </Router>
  );
}

export default App;
