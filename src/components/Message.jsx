import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img
        src="https://freesvg.org/img/abstract-user-flat-4.png"
        alt=""
        />
        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img
        src="https://freesvg.org/img/abstract-user-flat-4.png"
        alt=""
        />
      </div>
    </div>
  )
}

export default Message