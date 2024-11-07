import React from 'react'
import './home.css'
import Head from '../../components/Header/Head'
import Exploremenu from '../../components/exploremenu'
import Dishes from '../../components/dishes/dishes'
const Home = () => {
  return (
    <div>
      <Head/>
      <Exploremenu/>
      <Dishes/>
    </div>
  )
}

export default Home
