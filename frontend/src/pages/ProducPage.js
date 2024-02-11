import {useEffect, useState } from "react";
import SearchBar from "../components/Searchbar";
import Product from "../components/Product";

const ProducPage = ()=>{
    const [keyWord, setKeyWord] = useState("")
    const [cartProducts, setCartProducts] = useState([])
    const [products, setProducts] = useState([])
    //const [showCart, setShowCart] = useState(false)

    useEffect(()=>{
        fetchProducts()
    },[])

    const fetchProducts = async ()=>{
            
        const response = await fetch('/admin/products');
        const json = await response.json();
        
        console.log(json)

        if(response.ok){
            setProducts(json)
        }
    }

     return (
         
            <div className="max-w-3xl mx-auto px-4">
                    
                            <div>

                                <SearchBar setKeyWord={setKeyWord}/>
                                {
                                    products && products.map(product => (
                                        (product.name.match(keyWord) || 
                                        product.category.match(keyWord)
                                        )
                                        && <Product product = {product} setProducts = {setProducts} cartProducts = {cartProducts} setCartProducts = {setCartProducts} / >
                                    )
                                    )
                                }
                            </div>
                            
                                
                    
                            
                    

            </div>
        
     )
}

export default ProducPage