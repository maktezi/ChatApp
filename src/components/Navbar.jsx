import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className="logo">chat.box</span>
      <div className="user">
        <img src="https://freesvg.org/img/abstract-user-flat-4.png" alt="" />
        <span>Mak</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar