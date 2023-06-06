import React from 'react'
import Tweet from './Tweet';

function Tweets(props){

    //const [toogle, setToogle] = useState(false);

const tweets = [
    {
    name: "Farid",
    age: 26,
    tweet: "JavaScript is best"
    },
    {
    name: "Fuad",
    age: 30,
    tweet: "React is best"
    },
    {
    name: "Samir",
    age: 20,
    tweet: "PHP is best"
    }
]
    return (
  
        <section>
           { tweets.map(tweet =>(
              <Tweet name={tweet.name} age={tweet.age}  tweet = {tweet.tweet}/>
           ))}
           <p >Number of counter which I can acsses from tweets Counter: {props.nr}</p>
           <button onClick={props.setToogle}>Toggle ME!!!!</button>
        </section>

    )
  
    }

export default Tweets;