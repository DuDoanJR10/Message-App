import React from 'react'
import Message from './Message'

const Messages = () => {
  return (
    <div className='Messages'>
        <Message owner={true} />
        <Message owner={true} />
        <Message />
        <Message owner={true} />
        <Message />
        <Message  owner={true}/>
    </div>
  )
}

export default Messages