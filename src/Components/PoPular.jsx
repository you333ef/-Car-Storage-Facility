import React, { useEffect, useState } from 'react'
import STYLEST from './pop.module.css'
import MainImg from '../assets/images/CAR_TQSEEMA.svg'
import { FaStar } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { FaBowlRice } from "react-icons/fa6";
import { TbManualGearbox } from "react-icons/tb";
import { LuCableCar } from "react-icons/lu";
import axios from 'axios';
import carOne from "@/assets/images/carOne.svg?url";
import carTwo from "@/assets/images/carTwo.svg?url";
import carThree from "@/assets/images/carThree.svg?url";
import carFour from "@/assets/images/carFour.svg?url";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import MostCars from './MostCars';
const PoPular = () => {
const CARIMGE = {
    1: carOne,
    2: carTwo,
    3: carThree,
    4: carFour,

}
let navigate=useNavigate()
let gotocomponent=()=>{
    navigate('/most-cars')
}
    let [dataApi, setDataApi] = useState([]);
    let[search, setSearch] = useState('');
    function handlesearch(event){
        console.log(event.target.value)
        setSearch(event.target.value)
    }
    function filterCars(item){
        return item.car_model.toLowerCase().includes(search.toLowerCase())
    }
    useEffect(() => {
        const fetchData = async () => {
          let dataApi = await axios.get('https://myfakeapi.com/api/cars/');
          setDataApi(dataApi ?.data .cars.slice(0, 4)); 
        };
        fetchData();
      }, []);
  return (
    <>
    <div className={STYLEST.POP}>
        <div className={`mt-5 text-center ${STYLEST.POP_TOP}`}>
        <input type="text" className='' 
        value={search}
        onChange={handlesearch}
        
        placeholder="Search By Name"/>
       
       
        <button>Search</button>
      

        </div>
        <div className={`text-center ${STYLEST.POP_TOP_TITLE} `}>
            <button>POPULAR RENTAL DEALS</button>
            <h3>Most popular cars rental deals</h3>
        </div>
    <div className="container">
    <div className={`row  ${STYLEST.TQSEEMA}`}>
     {dataApi.filter(filterCars).map((item, index) => (
      <div key={index} className={`col-lg-3  col-md-6 col-sm-6  col-6 ${STYLEST.TQSEEMA1}`}>
      <img src={CARIMGE[item.id]} alt="" />
      <div className={`${STYLEST.PDAYA}`}>
          <h5>{item.car_model}</h5>
          <p><FaStar className={STYLEST.STArIcon}/>
          4.8 <span> (2.436 reviews)</span></p>
      
      </div>
      <div className={` ${STYLEST.VV}`}>
          <div className={` ${STYLEST.child}`}>
              <p> <FaRegUser />
              {item.id} Passagers</p>
              <p> <FaBowlRice />
              Air</p>
          </div>
          <div className={` ${STYLEST.child}`}>
          <p><TbManualGearbox />Auto</p>
           <p><LuCableCar />{item.id} Doors</p>
          </div>
      </div>
      <hr  className={STYLEST.Khat}/>
      <div className={` ${STYLEST.VPDO}`}>
      <p>Price</p>
      <h6>{item.price} <span> /day</span></h6>
      </div>
      <button className={` ${STYLEST.Rentbtn}`} onClick={gotocomponent} >Rent Now </button>
      
                  </div>
     ))}
    
    
        
        </div>
    </div>
        


<button className={`mt-5 text-center btn d-flex m-auto jc-center ${STYLEST.vehicles}`} onClick={gotocomponent} >Show all vehicles<FaArrowRight />

</button>

    </div>
    </>
  )
}

export default PoPular