import React, { useState } from 'react';
import TweetForm from './TweetForm';
import TweetList from './TweetList';
import './styles.css';
import list from './dataset.json';

function App() {

  const [listItems, setListItems] = useState(list);

  const updateListItems = (listItem) => {



    let updatedList = [...list];
    updatedList.unshift(listItem);

    setListItems(updatedList);

  }

  return (
    <div className="App">
      <header className="header">
        <img src='https://e7.pngegg.com/pngimages/708/311/png-clipart-twitter-twitter-thumbnail.png' alt="Twitter Logo" className="twitter-logo" />
        <h1>Twitter</h1>
      </header>
      <TweetForm updateListItems={updateListItems}/>
      <TweetList list={listItems}/>
      <footer className="footer">
        Made by <strong>Travel Tone</strong>
      </footer>
    </div>
  );
}

export default App;
