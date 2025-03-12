import React from 'react'
import sst from '../assets/images/Car-details_compo.svg'
import STY from './dg.module.css';
const DG = () => {
  return (
    <div className={`${STY.details}`}>
        <img className={`${STY.det_image}`} src={sst} alt="" />
    </div>
  )
}

export default DG