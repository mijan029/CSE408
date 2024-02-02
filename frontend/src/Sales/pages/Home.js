import { useEffect, useState } from "react";
// //components
// import Workout from "../component/workouts";
// import WorkOutForm from "../component/workoutform";
// import { useWorkOutContext } from "../hook/useWorkOutContext";\

//components
import SearchBar from "../components/Searchbar";
import Products from "../components/Products";

const Home = ()=>{
    const [products, setProducts] = useState(null)

    useEffect(()=>{
        const fetchProducts = async ()=>{
            
            const response = await fetch('/admin/product');
            console.log(response)
            const json = await response.json();
            
            console.log(json)

            if(response.ok){
                setProducts(json)
            }
        }
        fetchProducts()
        console.log(products)
    },[])

     return (
         
            <div className="max-w-3xl mx-auto px-4">
                <SearchBar />
                {
                    products && products.map(product => (
                        <Products product = {product} / >
                        
                       )
                
                    )
                }

            </div>
                
        
        
     )
}

export default Home