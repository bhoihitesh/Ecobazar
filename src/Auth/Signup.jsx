import React from 'react'
import './signup.scss'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <>
     <div className="container-fluid">
      <nav>
        <ul className='bg-light shadow d-flex justify-content-around align-items-center' style={{height:"50px"}}>
          <li className='list-unstyled'><Link to="/" className='text-decoration-none text-dark'>Home</Link></li>
          <li className='list-unstyled'><Link to="/" className='text-decoration-none text-dark'>Services</Link>
              <ul className='bg-light shadow ' style={{height:"auto"}}>
                <li className='list-unstyled'><Link to="/" className='text-decoration-none text-dark'>Web design</Link></li>
                <li className='list-unstyled'><Link to="/" className='text-decoration-none text-dark'>Brochure development</Link>
                  {/* <ul className='bg-light shadow ' style={{height:"auto"}}>
                    <li className='list-unstyled'><Link to="/" className='text-decoration-none text-dark'>App design</Link></li>
                    <li className='list-unstyled'><Link to="/" className='text-decoration-none text-dark'>App development</Link></li>
                    <li className='list-unstyled'><Link to="/" className='text-decoration-none text-dark'>Digital marketing</Link></li>
                  </ul> */}
                </li>
                <li className='list-unstyled'><Link to="/" className='text-decoration-none text-dark'>App development</Link></li>
              </ul>
          </li>
          <li className='list-unstyled'><Link to="/" className='text-decoration-none text-dark'>About</Link></li>
          <li className='list-unstyled'><Link to="/" className='text-decoration-none text-dark'>Contact</Link></li>
        </ul>
      </nav>
     </div>
    </>
  )
}

export default Signup
