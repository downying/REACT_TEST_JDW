import React, { useContext } from 'react';
import { Link } from 'react-router-dom'
import './Header.css'

const Header = () => {

    return (
      <header>
          <div className="logo">
              <Link to="/">
                <img src="https://i.imgur.com/fzADqJo.png" alt="logo" className='logo' />
              </Link>
          </div>
          <h1 className='title'>게시판 프로젝트</h1>
      </header>
  )
}

export default Header