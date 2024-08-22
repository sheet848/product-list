import './App.css'
import Cart from './components/Cart'
import ProductsContainer from './components/ProductsContainer'
import Data from './constant/data'

function App() {
  return (
    <>
      <h1 className='w-full text-[2rem] px-4 py-14 pb-3 font-bold capitalize md:px-16'>Desserts</h1>
      <div className="product-list px-4 py-14 w-full mx-auto max-w-[1024px] md:flex md:px-16">
        <div className="section1 md:w-[340px] lg:w-[600px]">
        {Data.map((e) => {
          return <ProductsContainer data={e} />
        })}
        </div>
        <div className="section2 sticky self-start">
        <Cart />
        </div>
      </div>
    </>
  )
}

export default App
