import React, { useState } from 'react';
import axios from 'axios';
import { FaReply } from 'react-icons/fa';

const TweetForm = () => {
    const [tweet, setTweet] = useState('');
    const [reply, setReply] = useState('');
    const [response, setResponse] = useState('');
    const [replyresponse, setReplyresponse] = useState('');
    const [showReply, setShowReply] = useState(false);

    const handleSubmit = async (e) => {

        e.preventDefault();
        try {
            // Send the tweet to the server
            const response = await axios.post('http://localhost:8080/cscentiment/processQuery', {
                review: tweet,
                reviewId: 1
            });
            let content = JSON.parse(response.data.choices[0].message.content);
            setResponse(content.response);
            // Clear the input field
            setTweet('');
        } catch (error) {
            console.error(error);
        }

    };

    const handleReply = async (e) => {
        e.preventDefault();
        try {
            // Send the tweet to the server
            const replyresponse = await axios.post('http://localhost:8080/cscentiment/caseCreation', reply);
            // Clear the input field
            setReplyresponse(replyresponse.data);
            setShowReply(false);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="tweet-container">
            <div className='username'>
                <img src='https://cdn.icon-icons.com/icons2/589/PNG/256/icontexto-user-web20-twitter_icon-icons.com_55355.png' alt="Twitter Logo" className="twitter-logo" />
                <span className='customername'>Random customer</span>
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
                <div className="tweet-container" >
                    {
                        response &&

                        <>
                            <div className="response">
                                <div className='username'>
                                    <img src='https://partners.sio365.com/partner-1513661115.png' alt="Twitter Logo" className="twitter-logo" />
                                    <span><strong>Priceline response</strong></span>
                                </div>


                                <p>{response}</p>
                            </div>
                            
                            <button onClick={() => setShowReply(true)}>
                                <FaReply /> Reply
                            </button>

                        </>

                    }

                    {
                        showReply &&
                        <>
                            <div className='username'>
                                <img src='https://cdn.icon-icons.com/icons2/589/PNG/256/icontexto-user-web20-twitter_icon-icons.com_55355.png' alt="Twitter Logo" className="twitter-logo" />
                                <span className='customername'>Random customer</span>
                            </div>

                            <textarea
                                rows={5}
                                placeholder="Compose your tweet..."
                                value={reply}
                                onChange={(e) => setReply(e.target.value)}
                            />
                            <button type="submit" onClick={handleReply}>
                                Tweet
                            </button>
                        </>
                    }
                    {
                        !showReply && reply &&
                        <>
                            <div className='username'>
                                <img src='https://cdn.icon-icons.com/icons2/589/PNG/256/icontexto-user-web20-twitter_icon-icons.com_55355.png' alt="Twitter Logo" className="twitter-logo" />
                                <span className='customername'>Random customer</span>
                            </div>

                            <p>{reply}</p>
                        </>
                    }
                    {
                        replyresponse &&
                        <>
                            <div className="response">
                                <div className='username'>
                                    <img src='https://partners.sio365.com/partner-1513661115.png' alt="Twitter Logo" className="twitter-logo" />
                                    <span><strong>Priceline response</strong></span>
                                </div>

                                <p>{replyresponse}</p>
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default TweetForm;
