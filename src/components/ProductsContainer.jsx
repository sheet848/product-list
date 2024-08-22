import React from 'react'
import cart from '../../public/icon-add-to-cart.svg'

const ProductsContainer = (props) => {
  return (
    <>
    <div className="productdata">
        <ul>
            <div className="product pb-7">
                <li>
                    <img className="rounded-lg md:hidden" src={props.data.image.mobile} alt={props.data.name} />
                    <img className='rounded-lg hidden md:block lg:w-[40%]' src={props.data.image.desktop} alt={props.data.name}/>
                </li>
                <button className='bg-white py-4 px-6 rounded-full relative bottom-6 border-2 border-orange-600 block'>
                    <p className='flex font-semibold'>
                    <span className='pr-3 pt-1'>
                        <img src={cart} alt="add to cart" />
                    </span>
                    Add to Cart</p>
                </button>
                <h2 className='text-[#AD8985]'>{props.data.category}</h2>
                <h3 className='font-bold text-black'>{props.data.name}</h3>
                <h4 className='font-medium text-orange-600'>${props.data.price}</h4>
            </div>
        </ul>
    </div>
    </>
  )
}

export default ProductsContainer