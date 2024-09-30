import React from 'react'
import HomeNav from '../components/homeCompo/HomeNav'
import Logo from '../components/homeCompo/Logo'
import Proadd from '../components/homeCompo/Proadd'

export default function Homepage() {
  return (
    <div>
      <div>
        <HomeNav/>
      </div>
      <div className=''> 
        <Logo/>
      </div>
      <div>
        <Proadd/>
      </div>
    </div>
  )
}
