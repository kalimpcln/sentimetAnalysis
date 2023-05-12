function TweetList({ list }) {

  return (
    <div className="tweet-container">
      {
        list.map(item => {
          return (
            <>
              <div className='username'>
                <img src='https://cdn.icon-icons.com/icons2/589/PNG/256/icontexto-user-web20-twitter_icon-icons.com_55355.png' alt="Twitter Logo" className="twitter-logo" />
                <span className="customername">Random customer</span>
              </div>
              <p>{item.review}</p>
            </>
          )
        })
      }
    </div>
  )

}


export default TweetList;
