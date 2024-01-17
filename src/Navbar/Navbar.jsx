import React, { useEffect, useState } from 'react'
import "./Navbar.scss";
import { FaUserCircle } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { TiThMenuOutline } from "react-icons/ti";
import { Link } from 'react-router-dom';
import { IoClose } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { motion } from "framer-motion"
import { useDispatch, useSelector } from 'react-redux';
import { FaIndianRupeeSign } from "react-icons/fa6";
import { FaSquareMinus } from "react-icons/fa6";
import { FaSquarePlus } from "react-icons/fa6";
import { remove, updateTodo } from '../Redux/Product';
import Time from '../Time';
import FlipMove from 'react-flip-move';
import { CartOff, CartOn } from '../Redux/CartView';

const Navbar = () => {

    const [navigateTab, setNavigateTab] = useState("Login");

    const [close, setClose] = useState(false);
    const [cartView, setCartView] = useState(false);

    const api = useSelector((state) => state.product);
    const dispatch = useDispatch();

    const arry = [...api];

    const Add = (id, num) => {
        if (id && num) {
            const count = num + 1;
            dispatch(updateTodo({ id, count }))
        }

    }

    const Min = (id, num) => {
        if (num < 2) {
            return
        }
        if (id && num) {
            const count = num - 1;
            dispatch(updateTodo({ id, count }))
        }
    }

    const Delete = (id) => {
        if (id) {
            dispatch(remove(id))
        }
    }

    const total = api.reduce((acc, item) => {
        const itemTotal = item.price * item.count;
        return acc + itemTotal;
    }, 0);

    const orderedTodo = arry
        .slice()
        .sort((a, b) => (a.date && b.date ? a.date.localeCompare(b.date) : 0))
        .reverse();
    const [pay, setPay] = useState(false);

    const handleCartTrue = () => {
        dispatch(CartOn());
    }

    const select = useSelector((state) => state.catView.cartViews);

    return (
        <div className='navbar-main'>

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
                        <button className='btn btn-outline-primary ms-3 mt-4' onClick={() => setPay(false)}>Cancle</button>
                    </div>
                </div>
            }

            {close &&
                <motion.div
                    initial={{ x: 100 }}
                    transition={{ duration: 0.5 }}
                    animate={{ x: 0 }}
                    className="login-div">
                    <IoClose className='closeDiv' onClick={() => setClose(false)} />

                    {navigateTab === "Login" ?
                        <div className="login-wrapper">
                            <h2 className='text-center mb-5' >E-Store</h2>
                            <input type="email" id="exampleInputEmail1" aria-describedby="emailHelp"
                                placeholder="Enter email" className='login-input form-control' />
                            <input type="password" id="exampleInputPassword1" placeholder="Password"
                                className='login-input form-control  my-4' />

                            <button className='btn btn-primary'>Login</button>
                            <span className='my-4' > forgot password</span>
                            <div className='SingUp-btn' onClick={() => setNavigateTab("SignUp")}>
                                SignUp
                            </div>
                        </div>

                        :

                        <div className="login-wrapper">
                            <h2 className='text-center mb-5' >E-Store</h2>
                            <input type="email" id="exampleInputEmail1" aria-describedby="emailHelp"
                                placeholder="Enter email" className='login-input form-control' />
                            <input type="text" placeholder='Mobile' className='login-input form-control my-4' />
                            <input type="password" id="exampleInputPassword1" placeholder="Password"
                                className='login-input form-control mb-4' />

                            <button className='btn btn-success'>SignUp</button>
                            <span className='my-4' >
                                <button className='btn w-100'>
                                    <FcGoogle style={{ fontSize: "24px" }} /> Google</button>
                            </span>
                            Alredy have an account?
                            <div className='SingUp-btn mt-3' onClick={() => setNavigateTab("Login")}>
                                Login
                            </div>
                        </div>
                    }
                </motion.div>
            }

            {select &&
                <motion.div
                    initial={{ x: 100 }}
                    transition={{ duration: 0.5 }}
                    animate={{ x: 0 }}
                    className="Cart-div">
                    <IoClose className='closeDiv' onClick={() => dispatch(CartOff())} />
                    <div className="Cart-wrapper">

                        <FlipMove>
                            {orderedTodo.map((item) => {
                                return (
                                    <div >
                                        <div className="cart-container">
                                            <IoClose className='cart-delete' onClick={() => Delete(item.id)} />

                                            <img src={item.image} className='cart-image me-2' alt="" />
                                            <div>
                                                <div className='cart-name'>
                                                    {item.name.slice(0, 15)}...
                                                </div>
                                                <div className='mt-2'>
                                                    {item.count < 2 ?
                                                        < FaSquareMinus className='operator opacity' />
                                                        :
                                                        <FaSquareMinus className='operator' onClick={() => Min(item.id, item.count)} />
                                                    }

                                                    <span style={{ fontSize: "18px", fontWeight: "600" }} className='mx-3'>
                                                        {item.count}
                                                    </span>
                                                    <FaSquarePlus className='operator' onClick={() => Add(item.id, item.count)} />
                                                </div>
                                            </div>

                                            <h4 className='cart-price'>
                                                <FaIndianRupeeSign style={{ fontSize: "21px" }} />
                                                <span className='cart-pri'>
                                                    {item.price}
                                                </span>
                                            </h4>

                                            <div className="time">
                                                <Time timestamp={item.time} />
                                            </div>
                                        </div>
                                        <hr className='w-100' />
                                    </div>
                                )

                            })}
                        </FlipMove>

                        <div className='total'>
                            {total === 0 ? (<h4 style={{ textAlign: "center" }}>Missing Cart items?</h4>)
                                :
                                (
                                    <>
                                        <h4>Total: <FaIndianRupeeSign style={{ fontSize: "22px" }} />{total}</h4>
                                        <div className='buy-btn mt-1' onClick={() => setPay(true)}>Buy Now</div>
                                    </>
                                )
                            }
                        </div>
                    </div>

                </motion.div>
            }

            {/* {cartView &&
                <motion.div
                    initial={{ x: 100 }}
                    transition={{ duration: 0.5 }}
                    animate={{ x: 0 }}
                    className="Cart-div">
                    <IoClose className='closeDiv' onClick={() => setCartView(false)} />

                    <div className="Cart-wrapper">

                        <FlipMove>
                            {orderedTodo.map((item) => {
                                return (
                                    <div >
                                        <div className="cart-container">
                                            <IoClose className='cart-delete' onClick={() => Delete(item.id)} />

                                            <img src={item.image} className='cart-image me-2' alt="" />
                                            <div>
                                                <div className='cart-name'>
                                                    {item.name.slice(0, 15)}...
                                                </div>
                                                <div className='mt-2'>
                                                    {item.count < 2 ?
                                                        < FaSquareMinus className='operator opacity' />
                                                        :
                                                        <FaSquareMinus className='operator' onClick={() => Min(item.id, item.count)} />
                                                    }

                                                    <span style={{ fontSize: "18px", fontWeight: "600" }} className='mx-3'>
                                                        {item.count}
                                                    </span>
                                                    <FaSquarePlus className='operator' onClick={() => Add(item.id, item.count)} />
                                                </div>
                                            </div>

                                            <h4 className='cart-price'>
                                                <FaIndianRupeeSign style={{ fontSize: "21px" }} />
                                                <span className='cart-pri'>
                                                    {item.price}
                                                </span>
                                            </h4>

                                            <div className="time">
                                                <Time timestamp={item.time} />
                                            </div>
                                        </div>
                                        <hr className='w-100' />
                                    </div>
                                )

                            })}
                        </FlipMove>
                        <div className='total'>
                            {total === 0 ? (<h4 style={{ textAlign: "center" }}>Missing Cart items?</h4>)
                                :
                                (
                                    <>
                                        <h4>Total: <FaIndianRupeeSign style={{ fontSize: "22px" }} />{total}</h4>
                                        <div className='buy-btn mt-1'>Buy Now</div>
                                    </>
                                )
                            }
                        </div>
                    </div>

                </motion.div >
            } */}

            <div className='nav-one'>
                <div className='nav-title' >
                    <Link className='link' to={"/"}>
                        E-Store
                    </Link>
                </div>

                <div className='nav-main-div'>
                    <input type="text" className='nav-top-input' placeholder='Search for Products' />
                    <span className='cart-div' >
                        <div className="cart-count" onClick={handleCartTrue}>
                            {arry.length}
                        </div>
                        <FaCartShopping className='cart-icon me-2' onClick={() => dispatch(CartOn())} />
                        <span className='cart-text' style={{ fontSize: "18px", fontWeight: "600" }} onClick={() => dispatch(CartOn())}>Cart</span>
                    </span>
                    <FaUserCircle className='cart' onClick={() => setClose(true)} />
                    <TiThMenuOutline className='nav-mainu' />
                </div>
            </div>

            <input type="text" className='nav-bottom-input' placeholder='Search for Products' />
        </div >
    )
}

export default Navbar