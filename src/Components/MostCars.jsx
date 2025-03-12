import React, { useEffect, useState } from 'react';
import STY from '../Components/most.module.css';
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

const MostCars = () => {
    // تحويل كائن الصور لمصفوفة
    const CARIMGE = [carOne, carTwo, carThree, carFour];
    let navigate=useNavigate()
    let gotocomponent=()=>{
        navigate('/DG')
    }
    let [dataApi, setDataApi] = useState([]);
    let [search, setSearch] = useState('');

    function handlesearch(event) {
        setSearch(event.target.value);
    }

    function filterCars(item) {
        return item.car_model.toLowerCase().includes(search.toLowerCase());
    }

    useEffect(() => {
        const fetchData = async () => {
            let dataApi = await axios.get('https://myfakeapi.com/api/cars/');
            setDataApi(dataApi?.data?.cars); // عرض كل المنتجات
        };
        fetchData();
    }, []);

    return (
        <>
            <div className={STY.POP}>
                <div className={`mt-5 text-center ${STY.POP_TOP}`}>
                    <input 
                        type="text" 
                        value={search} 
                        onChange={handlesearch} 
                        placeholder="Search By Name" 
                    />
                    <button>Search</button>
                </div>

                <div className={`text-center ${STY.POP_TOP_TITLE}`}>
                    <button>POPULAR RENTAL DEALS</button>
                    <h3>Most popular cars rental deals</h3>
                </div>

                <div className="container">
                    <div className={`row ${STY.TQSEEMA}`}>
                        {dataApi.filter(filterCars).map((item, index) => (
                            <div key={index} className={`col-lg-3 col-md-6 col-sm-6 col-6 ${STY.TQSEEMA1}`}>
                                {/* استخدام index مع modulo لتحديد الصورة */}
                                <img src={CARIMGE[index % CARIMGE.length]} alt="" />
                                <div className={STY.PDAYA}>
                                    <h5>{item.car_model}</h5>
                                    <p>
                                        <FaStar className={STY.STArIcon}/> 4.8 <span> (2,436 reviews)</span>
                                    </p>
                                </div>
                                <div className={STY.VV}>
                                    <div className={STY.child}>
                                        <p><FaRegUser /> {item.id} Passengers</p>
                                        <p><FaBowlRice /> Air Conditioning</p>
                                    </div>
                                    <div className={STY.child}>
                                        <p><TbManualGearbox /> Auto</p>
                                        <p><LuCableCar /> {item.id} Doors</p>
                                    </div>
                                </div>
                                <hr className={STY.Khat} />
                                <div className={STY.VPDO}>
                                    <p>Price</p>
                                    <h6>{item.price} <span>/day</span></h6>
                                </div>
                                <button className={STY.Rentbtn} onClick={gotocomponent}>Rent Now</button>
                            </div>
                        ))}
                    </div>
                </div>

                <button className={`mt-5 text-center btn d-flex m-auto jc-center ${STY.vehicles}`}>
                    Show all vehicles <FaArrowRight />
                </button>
            </div>
        </>
    );
};

export default MostCars;
