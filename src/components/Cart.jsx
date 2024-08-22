import React from 'react'
import empty from '../../public/illustration-empty-cart.svg'

const Cart = () => {
  return (
    <>
    <div className="yourcart bg-white rounded-lg py-4 px-4 md:ml-5">
        <h2 className='text-orange-600 font-bold'>Your Cart (0)</h2>
        <div className="center text-center">
            <img src={empty} alt='Empty order img' className='mx-auto' />
            <p className='text-[#87635A] font-semibold'>Your added items will appear here</p>
        </div>
    </div>
    </>
  )
}

export default Cart