import React from 'react'
import '../styles/Companies.css'
import Prologis from '../assets//prologis.png'
import Tower from '../assets//tower.png'
import Equinix from '../assets//equinix.png'
import Realty from '../assets//realty.png'

function Companies() {
  return (
    <div className="companies">
      <section className="c-wrapper">
        <div className="paddings innerWidth flexCenter c-container">
          <img src={Prologis} alt="" />
          <img src={Tower} alt="" />
          <img src={Equinix} alt="" />
          <img src={Realty} alt="" />
        </div>
      </section>
    </div>
  )
}

export default Companies
