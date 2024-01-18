import React, { Fragment, useEffect, useState } from 'react'
import "./Home.scss"
import axios from 'axios';
import category from "./Json/category.json";
import mobile from "./Json/mobile.json";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import GroupCell from './GroupCell/GroupCell';
import { Link } from 'react-router-dom';
import OneCell from './OneCell/OneCell';
import topCarsole from "./../list.json";

import micro from "./../assets/plane.png";
import tv from "./../assets/tv.png";
import microsoft from "./../assets/microsoft.png";
import Footer from '../Footer';
import { useDispatch } from 'react-redux';
import { CartOff } from '../Redux/CartView';


const Home = () => {
    const [newApi, setNewApi] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                setNewApi(res.data);
            })
            .catch((error) => console.log(error))
    }, []);

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 1200);
    }, []);

    const TopCarsole = topCarsole.map((item) => {
        return (
            (
                <Fragment key={item.id}>
                    <div className='sliderBoxes-one'>
                        <div className='sliderBoxes-one-bg' style={{ background: `${item.bg}` }}>
                            {/* <h3 className='m-5'>{item.id}</h3> */}
                            <img src={item.id === 1 ? micro : null} alt="" className='oneImage' />
                            <img src={item.id === 2 ? tv : null} alt="" className='oneImage' />
                            <img src={item.id === 3 ? microsoft : null} alt="" className='oneImage' />

                        </div>
                    </div>
                </Fragment>
            )
        )
    });

    const Category = category.map((cat) => {
        return (
            (
                <Fragment key={cat.id}>

                    <div className='sliderBoxes'>
                        <Link className='link' to={`/${cat.id}`}>
                            <div>
                                <img src={cat.image} alt="" className='image' />
                                <div className='product-name'>{cat.name}</div>

                                <div className='d-flex my-1' style={{ color: 'goldenrod' }}>
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke />
                                </div>
                                <div className='price-div'>
                                    <FaIndianRupeeSign />
                                    {cat.price}
                                </div>
                            </div>
                        </Link>
                    </div>

                </Fragment>
            )
        )
    });

    const Mobile = mobile.map((mobile) => {
        return (
            (
                <Fragment key={mobile.id}>
                    <div className='sliderBoxes'>
                        <Link className='link' to={`${mobile.id}`}>
                            <div>
                                <img src={mobile.image} alt="" className='image' />
                                <div className='product-name'>{mobile.name}</div>

                                <div className='d-flex my-1' style={{ color: 'goldenrod' }}>
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke />
                                </div>
                                <div className='price-div'>
                                    <FaIndianRupeeSign />
                                    {mobile.price}
                                </div>
                            </div>
                        </Link>
                    </div>
                </Fragment >
            )
        )
    });

    const Product = newApi.map((pro) => {
        return (
            (
                <Fragment key={pro.id}>
                    <div className='sliderBoxes'>
                        <Link className='link' to={`/${pro.id}`}>
                            <div>
                                <img src={pro.image} alt="" className='image' />
                                <div className='product-name'>{pro.title}</div>

                                <div className='d-flex my-1' style={{ color: 'goldenrod' }}>
                                    <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStarHalfStroke />
                                </div>
                                <div className='price-div'>
                                    <FaIndianRupeeSign />
                                    {pro.price}
                                </div>
                            </div>
                        </Link>
                    </div>
                </Fragment>
            )
        )
    });

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(CartOff());
    }, [])


    return (
        <>
            <div className='main-div' onClick={() => dispatch(CartOff())}>

                <OneCell propsData={TopCarsole} />
                <div className="groupCell-wrapper">
                    <h5 className='my-4 title'>Top Deals</h5>

                    {!loading ? <div className=" placeholder-glow ">
                        <div className='loading-div placeholder'></div>
                    </div> :
                        <GroupCell propsData={Category} />
                    }

                </div>

                <div className="groupCell-wrapper">
                    <h5 className='my-4 title'>Mobiles</h5>
                    {!loading ? <div className=" placeholder-glow ">
                        <div className='loading-div placeholder'></div>
                    </div> :
                        <GroupCell propsData={Mobile} />
                    }

                </div>

                <div className="groupCell-wrapper">
                    <h5 className='my-4 title'>Suggested for you</h5>
                    {!loading ? <div className=" placeholder-glow ">
                        <div className='loading-div placeholder'></div>
                    </div> :
                        <GroupCell propsData={Product} />
                    }

                </div>

            </div>
            <Footer />
        </>
    )
}

export default Home