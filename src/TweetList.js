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
              <p className={item.isNegative ? 'negativeReview' : 'possitiveReview'}>{item?.review}</p>

              <div className="response">
                <div className='username'>
                  <img src='https://partners.sio365.com/partner-1513661115.png' alt="Twitter Logo" className="twitter-logo" />
                  <span><strong>Priceline response</strong></span>
                </div>

                <p className='response'>{item?.response}</p>
              </div>

            </>

          )
        })
      }
    </div>
  )

}


export default TweetList;
