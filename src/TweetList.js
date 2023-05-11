function TweetList({response}) {

  return (
    <div className="tweet-container" >

      <div className='username'>
                <img src='https://partners.sio365.com/partner-1513661115.png' alt="Twitter Logo" className="twitter-logo" />
                <span>Priceline response</span>
      </div>
      
          <p>{response}</p>
    </div>
  );
}

export default TweetList;
