import React from 'react'
import arrow from '../../../assets/shop_now.svg'
import category from '../../../JSON/category.json'
import categoryImage from '../../../assets/image 2.png'
import './dashboardcategory.scss'
const DashboardCategory = () => {
    console.log("category",category)
  return (
    <>
        <div className="dashboard_category_container">
            <div className="category_heading d-flex justify-content-between">
                <p>Popular Categories</p>
                <button>
                    View All
                <img src={arrow} alt="arrow" />    
                </button>
            </div>
            <div className="categorySection">
            {category.map((e,i)=>{
                return(
                    <>
                    <div key={i}>
                    <img src={categoryImage} alt="category"/>
                    <p>{e.name}</p>
                    </div>
                    </>
                )
            })}
            </div>
        </div>   
    </>
  )
}

export default DashboardCategory
