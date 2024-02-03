import { useContext } from "react"
import { MyContext } from "../context/MyConext"
import CartProducts from "../components/cartProduct"

const Cart = ()=>{
    const {allProducts} = useContext(MyContext)
    console.log("ami ashci")
    return (
        <div className="max-w-3xl mx-auto px-4">
                {
                    
                    allProducts && allProducts.map(product => {
                       return product.isAdded===true ? <CartProducts product = {product} / > : <></>
                    }
                
                    )
                }

            </div>
    )

}

export default Cart