import React from 'react'
import Header from '../../components/header/Header'
import './home.scss'
import DashboardCategory from './dashboard/DashboardCategory'
const Home = () => {
  return (
    <>
    <div className="home_container">
     <Header/> 
     <DashboardCategory/>
    </div>
    </>
  )
}

export default Home
