import location from '../../assets/Map Pin.svg'
import logo from '../../assets/logo.svg'
import menu from '../../assets/menu-button.png'
import close_menu from '../../assets/close-menu.png'
import dropdown_icon from '../../assets/dropdown_icon.svg'
// import search from '../../assets/Search.svg'
import heart from '../../assets/heart.svg'
import cart from '../../assets/Bag.svg'
import phone from '../../assets/phone.svg'
import profile from '../../assets/profile.jpg'
import './navbar.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Avatar } from '@mui/material'
const Navbar = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [MenuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
    console.log("toggleDropdown", dropdownVisible)
  };
  const isMenuOpen = () => {
    setMenuOpen(!MenuOpen)
  }
  const isMenuClose = () => {
    setMenuOpen(!MenuOpen)
  }
  return (
    <>
      <div className="main_container">

        <div className="location_row">
          <div className="navbar_heading">
            <div className="location_section">
              <img src={location} alt="location" />
              <p>Store Location: Lincoln- 344, Illinois, Chicago, USA</p>
            </div>
            <div className="login_div">
              <div className="lang_signup_sectipon">
                <select name="language" id="selectLanguages">
                  <option value="eng" key="eng" defaultValue={"Eng"}>Eng</option>
                  <option value="guj" key="guj">Guj</option>
                  <option value="hin" key="hin">Hin</option>
                </select>
                <select name="currency" id="selectCurrency">
                  <option value="usd" key="usd" defaultValue={"USD"}>USD</option>
                  <option value="inr" key="inr">INR</option>
                </select>

              </div>
              <div className="signup_signin_section">
                <button>Sign In</button>
                <span>/</span>
                <button>Sign Up</button>
              </div>
            </div>
          </div>
        </div>
        <div className="brand_header">
          <div className="brand_section">
            {
              MenuOpen ?
                <img src={close_menu} alt="close_menu" className=' close_menu' width={40} height={40} onClick={() => isMenuClose()} />
                :
                <img src={menu} alt="menu" className="menu_btn" width={40} height={40} onClick={() => isMenuOpen()} />
            }
            <img src={logo} alt="logo" className='brand_logo' />
          </div>
          <div className="search_section">
            <input type="search" placeholder='Search' />
            {/* <img src={search} alt="search" /> */}
            <button>Search</button>
          </div>
          <div className="cart_section">
            <div className="profile_section">
            <Avatar alt="Travis Howard" src={profile} />
            <ul className={`profile_menu`} id='shopMenu'>
              <li className='profile_item'><Link to="/">item 2</Link></li>
              <li className='profile_item'><Link to="/">item 2</Link></li>
            </ul>
            </div>
            <div className="heart">
            <img src={heart} alt="heart" />
            </div>
            <div className="cart">
            <div className="cart_img">
            <img src={cart} alt="cart" />
            <span>2</span>
            </div>
           <div className="cart_desc">
           <p>
              <span>Shopping cart</span>
              <br/>
              <span>$57.00</span>
            </p>
           </div>
            </div>
          </div>
        </div>
        <div className="navbar" style={{ width: MenuOpen ? "250px" : '' }}>
          <ul className='dropdown'>
            <li className={`dropdown_toggle`} aria-controls='homeMenu'>home&nbsp;<img src={dropdown_icon} alt="dropdown" />
              <ul className={`dropdown_menu ${dropdownVisible && `dropdown_display`}`} id='homeMenu'>
                <li className='dropdown_item'><Link to="/">item 1</Link></li>
                <li className='dropdown_item'><Link to="/">item 1</Link></li>
              </ul>
            </li>
            <li className='dropdown_toggle' aria-controls='shopMenu'>shop&nbsp;<img src={dropdown_icon} alt="dropdown" />
              <ul className={`dropdown_menu dropdown_home`} id='shopMenu'>
                <li className='dropdown_item'><Link to="/">item 2</Link></li>
                <li className='dropdown_item'><Link to="/">item 2</Link></li>
              </ul>
            </li>
            <li className='dropdown_toggle' onClick={toggleDropdown}>pages&nbsp;<img src={dropdown_icon} alt="dropdown" />
              <ul className='dropdown_menu'>
                <li className='dropdown_item' onClick={toggleDropdown}><Link to="/">item 3</Link></li>
                <li className='dropdown_item'><Link to="/">item 3</Link></li>
              </ul>
            </li>
            <li className='dropdown_toggle' onClick={toggleDropdown}>blog&nbsp;<img src={dropdown_icon} alt="dropdown" />
              <ul className='dropdown_menu'>
                <li className='dropdown_item'><Link to="/">item 4</Link></li>
                <li className='dropdown_item'><Link to="/">item 4</Link></li>
              </ul>
            </li>
            <li className='nav_item'>about us</li>
            <li className='nav_item'>contact us</li>
          </ul>
          <div className="contact_div">
            <p className='contact_no'>
              <img src={phone} alt="phone" />
              <span>(219) 555-0114</span>
            </p>
          </div>
        </div>

      </div>
    </>
  )
}

export default Navbar
