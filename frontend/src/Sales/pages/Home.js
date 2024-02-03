import { useContext, useEffect, useState } from "react";
// //components
// import Workout from "../component/workouts";
// import WorkOutForm from "../component/workoutform";
// import { useWorkOutContext } from "../hook/useWorkOutContext";\

//components
import SearchBar from "../components/Searchbar";
import Products from "../components/Products";
import { MyContext } from "../context/MyConext";

const Home = ()=>{
    const [keyWord, setKeyWord] = useState("")
    const {allProducts, dispatch} = useContext(MyContext)

    // const handleChange = ()=>{
    //     setKeyWord()
    // }
    console.log("ashe eikhane?")
    useEffect(()=>{
        const fetchProducts = async ()=>{
            
            const response = await fetch('/admin/product');
            console.log("dekhi to")
            const json = await response.json();
            
            console.log(json)

            if(response.ok){
                dispatch({type:'SET_PRODUCTS', payload:json})
            }
        }
        fetchProducts()
    },[dispatch])

     return (
         
            <div className="max-w-3xl mx-auto px-4">
                <SearchBar setKeyWord={setKeyWord}/>
                {
                    allProducts && allProducts.map(product => {
                        return keyWord ? product.name.match(keyWord) && <Products product = {product} / >:<Products product = {product} / >
                    }
                
                    )
                }

            </div>
                
        
        
     )
}

export default Home