import React from 'react'
import sst from '../assets/images/Car-details_compo.svg'
import STY from './dg.module.css';
import { useNavigate } from 'react-router-dom';
import { FaAnglesLeft } from "react-icons/fa6";

const DG = () => {

let navigate=useNavigate()
let OOPO=()=>{
    navigate('/')
}


  return (
    <div className="">
        <div className="container p-2 align-items-center ">
        <button className={`mt-4 ${STY.back_btn}`} onClick={OOPO}><FaAnglesLeft />
         SEE MORE</button>

        </div>
        <div className={`${STY.details}`}>
        <img className={`${STY.det_image}`} src={sst} alt="" />

        </div>
    </div>
  )
}

export default DG