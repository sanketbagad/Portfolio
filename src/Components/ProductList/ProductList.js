import React from 'react'
import Product from '../Product/Product'
import "./productList.css"
import { products } from '../../data'

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Create & Inspire, walaaah!!</h1>
                <p className="pl-desc">
                    All the projects are created using MERN Stack and are in Production. Just Have a Look at them and if want One, get One.
                </p>
            </div>

            <div className="pl-list">
                {products.map(product => (
                    <Product key={product.id} link={product.link} img={product.img} />
                ))}
                
            </div>
        </div>
    )
}

export default ProductList
