import React, { Fragment, useEffect, useState } from 'react'
import "./Product.scss";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import category from "./../Home/Json/category.json";
import mobile from "./../Home/Json/mobile.json";
import { FaCartShopping } from "react-icons/fa6";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { MdLocationOn } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { AddProduct, updateTodo } from '../Redux/Product';
import Footer from '../Footer';


const Product = () => {
    const { id } = useParams();

    const [newApi, setNewApi] = useState([]);
    const [screen, setScreen] = useState(null);
    const [count, setCount] = useState(1);
    const dispatch = useDispatch();
    const [pay, setPay] = useState(false);
    const api = useSelector((state) => state.product);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(res => {
                setNewApi(res.data);
            })
            .catch((error) => console.log(error))
    }, []);

    const Arrya = [...category, ...mobile, ...newApi];

    const categoryMatch = Arrya.find((item) => item.id == id);

    if (!categoryMatch) {
        return <div className='product-main'></div>;
    }

    const handleAdd = (id, name, image, price) => {
        if (id && name && image && price) {
            dispatch(AddProduct(id, name, image, price));
        }
        return
    }



    return (
        <>
            <div className='product-main'>

                {pay &&
                    <div className="payment-div">
                        <div className="payment-div-card">
                            <h4 className='mb-5'>Ajay Anandrao</h4>

                            <div className='address'>
                                <div className="top-bar"> Delivery Address</div>
                                <div className="address-div">
                                    Shilp nagar, Aurangabad 439281 <span className='edit-add'>Edit</span>
                                </div>
                            </div>
                            <div className='ms-2 mt-2' style={{ color: "blue", fontWeight: "600" }}>Change</div>
                            <button className='btn btn-success mt-4'>Order Here</button>
                            <button className='btn btn-outline-primary ms-3 mt-4'  onClick={() => setPay(false)}>Cancle</button>
                        </div>
                    </div>
                }
                <div className="product-image-div">

                    <div className='product-image-wrapper' >
                        {screen ? <img src={screen} className='product-image' alt="" />
                            :
                            <img src={categoryMatch.image} className='product-image' alt="" />
                        }
                    </div>

                    <div className='w-100 d-flex justify-content-center'>
                        <img src={categoryMatch.s1} className='product-screenshot' alt=""
                            onClick={() => setScreen(categoryMatch.s1)}
                        />
                        <img src={categoryMatch.s2} className='product-screenshot' alt=""
                            onClick={() => setScreen(categoryMatch.s2)} />
                        <img src={categoryMatch.s3} className='product-screenshot' alt=""
                            onClick={() => setScreen(categoryMatch.s3)} />
                        <img src={categoryMatch.s4} className='product-screenshot' alt=""
                            onClick={() => setScreen(categoryMatch.s4)} />
                    </div>
                </div>


                <div className='product-detail-div'>
                    <div>
                        <h4 className='product-title'>
                            {categoryMatch.name ? categoryMatch.name : null}
                            {categoryMatch.title ? categoryMatch.title : null}
                        </h4>
                        <div className='product-price-div'>
                            <FaIndianRupeeSign />{categoryMatch.price}
                        </div>

                        <div className='d-flex mt-3 align-items-center'>
                            <div className="add-to-cart" style={{ border: '1px solid #999' }}
                                onClick={() => handleAdd(categoryMatch.id, categoryMatch.name,
                                    categoryMatch.image, categoryMatch.price)}>

                                <FaCartShopping style={{ fontSize: "18px" }} className='me-2' />
                                ADD TO CART
                            </div>
                            <div className="add-to-cart ms-3"
                                style={{ backgroundColor: "#DF013A", color: "white" }}
                                onClick={() => setPay(true)}
                            >BUY NOW</div>
                        </div>
                    </div>

                    <hr className='w-100' />

                    {/* product option */}

                    <div>

                        <div className="product-option-div" style={{ alignItems: "center" }}>
                            <h5 className='product-option-item'>Ratings & Reviews</h5>
                            <FaStar className='star' />
                            <FaStar className='star' />
                            <FaStar className='star' />
                            <FaStar className='star' />
                            <FaRegStarHalfStroke className='star' />
                        </div>

                        <div className="product-option-div">
                            <h5 className='product-option-item'>Color</h5>
                            <div style={{ background: "red", width: "30px", height: "30px", borderRadius: "50%" }}></div>
                            <div className='mx-2' style={{ background: "blue", width: "30px", height: "30px", borderRadius: "50%" }}></div>
                            <div style={{ background: "green", width: "30px", height: "30px", borderRadius: "50%" }}></div>
                        </div>

                        <div className="product-option-div" style={{ alignItems: "center" }}>
                            <h5 className='product-option-item'>Delivery</h5>
                            <MdLocationOn style={{ color: "#181818", fontSize: "24px" }} />
                            <input type="text" placeholder='435 242' className='delevery-input' />

                        </div>

                        <div className="product-option-div">
                            <h5 className='product-option-item'>Highlights</h5>
                            <ul>
                                <li>Lorem ipsum dolor</li>
                                <li>Lorem ipsum dolor</li>
                                <li>Lorem ipsum dolor</li>
                                <li>Lorem ipsum dolor</li>
                            </ul>
                        </div>

                        <div className="product-option-div">
                            <h5 className='product-option-item'>Seller</h5>
                            <ul>
                                <li>7 Days Service Center Replacement/Repair</li>
                            </ul>
                        </div>

                        <div className="product-option-div">
                            <h5 className='product-option-item '>Description</h5>
                            <p className='w-75'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio ab voluptatibus, minima obcaecati necessitatibus placeat asperiores quaerat fugiat fuga, mollitia sed nobis saepe molestiae magni tenetur cum. Voluptatibus, ullam beatae.</p>
                        </div>


                    </div>
                </div>

            </div>

            {!categoryMatch ? null : <Footer />}
        </>
    )
}

export default Product