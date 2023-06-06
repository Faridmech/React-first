import React from 'react'

const Tweet = (props)=>(
  
  <div>
    <h1>{props.name}</h1>
    <p>{props.age}</p>
    <p>{props.tweet}</p>
 </div>
)

export default Tweet;