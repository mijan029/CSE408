import {useEffect, useState } from "react";
import CashierProduct from "../components/CashierProduct";
import {useNavigate} from 'react-router-dom'
import  axios  from "axios"
import SearchBar from "../components/Searchbar"
import CashierSellTable from "../components/CashierSellTable"
import { useAuth } from "../context/AuthContext"
import { response } from "express";

const CashierSellPage = ()=>{
    const [products, setProducts] = useState([])
    const [status, setStatus] = useState("Sell") 
    const [keyWord, setKeyWord] = useState('')
    const [sellList, setSellList] = useState([])
    const [customerName, setCustomerName] = useState("")
    const [customerContact, setCustomerContact] = useState("")
    // status can be None, Update, Purchase, Add
    const { user }= useAuth()
    //const token= user.token
    //console.log(user)
    const navigate = useNavigate()
    const fetchProducts = async () => {
        axios.get('/showroom/product')
        .then(response =>{
            setProducts(response.data)
            console.log(products)
        }
        ).catch(error=>{
            console.log(error)
        })  
        // response = await fetch('/showroom/product')
       
        // setProducts(response.data)
        // console.log(products)  
    }

    useEffect(()=>{
        fetchProducts();
    },[])

    const onSetProducts = (product)=>{
        setProducts([...products,product])
    }


    const onSetStatus = (stat)=>{
        setStatus(stat) 
        setSellList([])
    }

    const onSell = (product)=>{
        var ase = false
        var filteredList = sellList.filter(e=>{
            if(e._id===product._id ) {console.log(ase); ase=true; return false}
            else return true;
        })

        ase===false?setSellList([...filteredList,product]):setSellList(filteredList)

        console.log(sellList)
    }

     return (
            <div className="max-w-3xl mx-auto px-4">

                <div className="my-20 ml-10">
                    <div>
                        <span className="text-red-500 font-bold">*</span> <label for = "customer_name" className="text-xl font-medium mr-4">Customer Name:</label>
                        <input 
                            className="border-2 rounded-md border-gray-500  py-1 pl-6 ml-4"
                            type="String"
                            name="customer_name"
                            placeholder="Faisal Zaman"
                            onChange={(e)=>{
                                setCustomerName(e.target.value)
                            }}
                        /> 
                    </div>

                    <div className="mt-3">
                    <span className="text-red-500 font-bold">*</span>  <label for = "customer_contact_info" className="text-xl font-medium">Customer Contact:</label>
                        <input 
                            className="border-2 rounded-md border-gray-500  py-1 pl-6 ml-4"
                            type="String"
                            name="customer_contact_info"
                            placeholder="+880.. or ..@gmail.com"
                            onChange={(e)=>{
                                setCustomerContact(e.target.value)
                            }}
                        />    
                    </div>        
                </div>   

                <div className="col-span-1 mx-10">

                 <SearchBar setKeyWord={setKeyWord}/>
                    
                {
                    
                    products && products.map((product) => (
                            product.name.match(keyWord) && <CashierProduct product={product}  onSell={onSell}/>
                        )
                    )
                }
                
            </div>

            <div className="col-span-1 mx-3">
                {
                    //(status.match("Sell") && <CashierSellTable sellList={sellList} onSetStatus={onSetStatus} fetchProducts={fetchProducts}/>) 
                }
                
            </div>
         </div>       
     )
}

export default CashierSellPage