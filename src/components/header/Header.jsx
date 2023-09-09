import React from 'react'
import './header.scss'
import shop_now from '../../assets/shop_now.svg'
import deliveryTruck from '../../assets/delivery-truck.svg'
import headphone from '../../assets/headphone.svg'
import monyPack from '../../assets/package.svg'
import shoppingBag from '../../assets/shopping-bag.svg'
const Header = () => {
    return (
        <>
            <div className="header_container">
                <div className="background_section1  animate__animated animate__backInLeft">
                    <div className="background_info">
                        <h1>Fresh & Healthy <br /> Organic Food</h1>
                        <div className="discount">
                            <h4>Sale up to <span>30% OFF</span></h4>
                            <p>Free shipping on all your order.</p>
                        </div>
                        <div className="shopnow_btn">
                            <button className=''>
                                Shop now &nbsp;&nbsp;
                                <img src={shop_now} alt="shop now" />
                            </button>
                        </div>
                    </div>
                </div>
                <div className="background_section2  animate__animated animate__backInRight">
                    <div className="background1_innerdiv">
                        <p className='sale'>SUMMER SALE</p>
                        <h2>75% OFF</h2>
                        <p className='fruit_vegitable'>Only Fruit And Vegitable</p>
                        <button>Shop now&nbsp;&nbsp; <img src={shop_now} alt="shop now" /></button>
                    </div>
                    <div className="background2_innerdiv">
                        <p>BEST DEAL</p>
                        <h5>Special Products<br />Deal Of The Month</h5>
                        <button>Shop now&nbsp;&nbsp;<img src={shop_now} alt="shop now" /></button>
                    </div>
                </div>
            </div>
            <div className="infoMainDiv animate__animated animate__pulse">
            <div className="information shadow">
                <div className="info_heading_first">
                    <div className='info_first infoDiv'>
                        <div className="image_div">
                            <img src={deliveryTruck} alt="deliveryTruck" />
                        </div>
                        <div className="text_info">
                            <h5>Free Shipping</h5>
                            <p>Free shipping on all your order</p>
                        </div>
                    </div>
                    <div className='info_second infoDiv'>
                        <div className="image_div">
                            <img src={headphone} alt="headphone" />
                        </div>
                        <div className="text_info">
                            <h5>Customer Support 24/7</h5>
                            <p>Instant access to Support</p>
                        </div>
                    </div>
                </div>
                <div className='info_heading_second'>
                    <div className='info_third infoDiv'>
                        <div className="image_div">
                            <img src={shoppingBag} alt="shoppingBag" />
                        </div>
                        <div className="text_info">
                            <h5>100% Secure Payment</h5>
                            <p>We ensure your money is save</p>
                        </div>
                    </div>
                    <div className='info_fourth infoDiv'>
                        <div className="image_div">
                            <img src={monyPack} alt="monyPack" />
                        </div>
                        <div className="text_info">
                            <h5>Money-Back Guarantee</h5>
                            <p>30 Days Money-Back Guarantee</p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </>
    )
}

export default Header
