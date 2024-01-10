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


    return (
        <div className='navbar-main'>

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
                            <input type="text" placeholder='Email' className='login-input' />
                            <input type="text" placeholder='Password' className='login-input my-4' />

                            <button className='btn btn-primary'>Login</button>
                            <span className='my-4' > forgot password</span>
                            <div className='SingUp-btn' onClick={() => setNavigateTab("SignUp")}>
                                SignUp
                            </div>
                        </div>

                        :

                        <div className="login-wrapper">
                            <h2 className='text-center mb-5' >E-Store</h2>
                            <input type="text" placeholder='Email' className='login-input' />
                            <input type="text" placeholder='Mobile' className='login-input my-4' />
                            <input type="text" placeholder='Password' className='login-input mb-4' />

                            <button className='btn  btn-success'>SignUp</button>
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

            {cartView &&
                <motion.div
                    initial={{ x: 100 }}
                    transition={{ duration: 0.5 }}
                    animate={{ x: 0 }}
                    className="Cart-div">
                    <IoClose className='closeDiv' onClick={() => setCartView(false)} />

                    <div className="Cart-wrapper">
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
            }

            <div className='nav-one'>
                <div className='nav-title'>
                    <Link className='link' to={"/"}>
                        E-Store
                    </Link>
                </div>

                <div className='nav-main-div'>
                    <input type="text" className='nav-top-input' placeholder='Search for Products' />
                    <span className='cart-div' >
                        <div className="cart-count"  onClick={() => setCartView(true)}>
                            {arry.length}
                        </div>
                        <FaCartShopping className='cart-icon me-2' onClick={() => setCartView(true)}/>
                        <span className='cart-text' style={{ fontSize: "18px", fontWeight: "600" }}  onClick={() => setCartView(true)}>Cart</span>
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