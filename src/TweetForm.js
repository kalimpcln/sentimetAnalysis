import React, { useState } from 'react';
import axios from 'axios';
import TweetList from './TweetList';

const TweetForm = () => {
    const [tweet, setTweet] = useState('');
    const [response, setResponse] = useState('');

    const handleSubmit = async (e) => {
        console.log('TWEET', tweet);
        e.preventDefault();
        try {
            // Send the tweet to the server
            const response = await axios.post('http://localhost:5000/tweets', {
                review: tweet,
                username: 'Kalim'
            });
            setResponse(response.data.choices[0].message.content);
            // Clear the input field
            setTweet('');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="tweet-container">
            <div className='username'>
                <img src='https://cdn.icon-icons.com/icons2/589/PNG/256/icontexto-user-web20-twitter_icon-icons.com_55355.png' alt="Twitter Logo" className="twitter-logo" />
                <span>Random customer</span>
            </div>

            <textarea
                rows={5}
                placeholder="Compose your tweet..."
                value={tweet}
                onChange={(e) => setTweet(e.target.value)}
            />
            <button type="submit" onClick={handleSubmit}>
                Tweet
            </button>
            <div className="response-container">
                <TweetList response={response} />
                {/* <TweetList response='We’ve trained a model called ChatGPT which interacts in a conversational way. The dialogue format makes it possible for ChatGPT to answer followup questions, admit its mistakes, challenge incorrect premises, and reject inappropriate requests.'/> */}
            </div>
        </div>
    );
};

export default TweetForm;
