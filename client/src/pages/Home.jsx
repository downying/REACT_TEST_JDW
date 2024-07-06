import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../components/Header'
import './Home.css'

const Home = () => {
  return (
    <>
      <Header />
      <div className='container con'>
        <h3>REACT TEST JDW</h3>
        <hr />
        <Link to="/boards" className='moveToBoards'>게시판 이동</Link>
    </div>
    </>
  )
}

export default Home