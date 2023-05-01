import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className='searchForm'>
        <input type="text" placeholder='Search User' />
      </div>
      {/* <div className='userChat'>
        <img src="data:image/jpeg;base64,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"></img>
        <div className="userChatInfo">
          <span>Kratos</span>
        </div>
      </div> */}
    </div>
  )
}

export default Search