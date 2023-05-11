import React from 'react';
import TweetForm from './TweetForm';
import TweetList from './TweetList';
import './styles.css';
// import twitterLogo from './twitter-logo.png';

function App() {
  return (
    <div className="App">
      <header className="header">
        <img src='https://e7.pngegg.com/pngimages/708/311/png-clipart-twitter-twitter-thumbnail.png' alt="Twitter Logo" className="twitter-logo" />
        <h1>Twitter</h1>
      </header>
      <TweetForm />
      <footer className="footer">
        Made by <strong>Travel Tone</strong>
      </footer>
    </div>
  );
}

export default App;
