import { useEffect, useState } from "react"
import axios from "axios"
import SearchBar from "../components/Searchbar"
import { useAuth } from "../context/AuthContext"
import ProductOrderTableShowroom from "../components/ProductOredrTableShowroom"

const ProductPageShowroom = ()=>{
    const [products, setProducts] = useState([])
    const [keyWord, setKeyWord] = useState('')
    const [orderList, setOrderList] = useState([])
    const [OnBoard, setOnBoard] = useState([])
    // status can be None, Update, Purchase, Add
    const { user }= useAuth()
    //const token= user.token
    //console.log(user)

    const fetchProducts = async () => {
        axios.get('/factory/product',{
            // headers: {
            //     Authorization: `Bearer ${ user.token }`
            // }
        })
        .then(response =>{
            setProducts(response.data)
        }
        ).catch(error=>{
            console.log(error)
        })
        setOnBoard(Array(products.length).fill(false))
        setOrderList([])
    }

    useEffect(()=>{
        fetchProducts();
    },[])



    const onRequest = (product)=>{
        //setStatus("Purchase")
        var ase = false
        var filteredList = orderList.filter(e=>{
            if(e._id===product._id ) {console.log(ase); ase=true; return false}
            else return true;
        })

        ase===false?setOrderList([...filteredList,product]):setOrderList(filteredList)

    }

    const handleClick = (raw,index)=>{
        onRequest(raw)
        let newOnBoard = OnBoard
        newOnBoard[index] = !OnBoard[index]
        setOnBoard(newOnBoard)
    }


    return (
        <div className='grid grid-cols-2 h-full'>
            <div className="col-span-1 mx-10">

                    <SearchBar setKeyWord={setKeyWord}/>
                    
                {
                    
                    products && products.map((product,index) => (

                        product.name.match(keyWord) && (

                                <div className="bg-white rounded-lg my-4 p-3">
           
                                    <div className="flex">
                                        <div className="ml-2">
                                            <p className="text-2xl font-bold text-blue-500">{product.category}</p>
                                            <p className="text-lg font-medium ">{product.name}</p>
                                            <p className="text-gray-600">Unit Price: { product.price }</p>
                                            <p className="text-gray-600">inStock: { product.inStock }</p>
                                        </div>
                                    </div>

                                    <div className="flex justify-end my-2">
                                        
                                           
                                        <button  onClick={()=>handleClick(product, index)}
                                            className={`ml-2 px-4 py-2 bg-blue-500 text-white rounded ${OnBoard[index] && "shadow-lg bg-pink-500"}`}
                                        >  {OnBoard[index] ? "OnBoard":"Get"}  </button>

                                     
                                    </div>

                                </div>
                                )
                        )
                    )
                }
                
            </div>

            <div className="col-span-1 mx-3">
                {
                      <ProductOrderTableShowroom orderList={orderList} fetchProducts={fetchProducts}/>
                }
                
            </div>

        </div>
    )
}

export default ProductPageShowroom