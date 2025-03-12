import React from 'react'
import sst from '../assets/images/Car-details_compo.svg'
import STY from './dg.module.css';
const DG = () => {
  return (
    <div className="">
        <div className="container p-2">
        <button className={`mt-4 ${STY.back_btn}`}>back</button>

        </div>
        <div className={`${STY.details}`}>
        <img className={`${STY.det_image}`} src={sst} alt="" />

        </div>
    </div>
  )
}

export default DG