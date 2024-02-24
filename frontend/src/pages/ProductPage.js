import { useEffect, useState } from "react"
import axios from "axios"
import SearchBar from "../components/Searchbar"
import RawPurchaseTable from "../components/RawPurchaseTable"
import { useAuth } from "../context/AuthContext"
import Product from "../components/Product"
import AddProduct from "../components/AddProduct"
import UpdateProduct from "../components/UpdateProduct"
import ProductProduceTable from "../components/ProductProduceTable"

const ProductPage = ()=>{
    const [products, setProducts] = useState([])
    const [status, setStatus] = useState("Add") 
    const [keyWord, setKeyWord] = useState('')
    const [produceList, setProduceList] = useState([])
    const [updateProduct, setUpdateProduct] = useState(null)
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
    }

    useEffect(()=>{
        fetchProducts();
    },[])

    const onSetProduct = (product)=>{
        setProducts([...products,product])
    }

    const onDelete = (raw) =>{
        axios.delete(`/factory/product/${raw._id}`)
        .then(
            setProducts(products.filter(e=>(e._id !== raw._id)))
        ).catch(error=>{
            console.log(error)
        })

        setStatus("Add")
    }

    const onSetStatus = (stat)=>{
        setStatus(stat)
        setProduceList([])
    }


    const onUpdate = (raw) =>{
        setStatus("Update")
        setUpdateProduct(raw)
        console.log(raw)

    }
    // const handleUpdate = () =>{
       
    //      //setRaws(raws.map(e=>(newRaw._id===e._id ? newRaw : e)))
    //      fetchRaws()
       
    // }

    const onProduce = (raw)=>{
        setStatus("Produce")
        var ase = false
        var filteredList = produceList.filter(e=>{
            if(e._id===raw._id ) {console.log(ase); ase=true; return false}
            else return true;
        })

        ase===false?setProduceList([...filteredList,raw]):setProduceList(filteredList)

    }


    return (
        <div className='grid grid-cols-2 h-dvh'>
            <div className="col-span-1 mx-10">

                    <SearchBar setKeyWord={setKeyWord}/>
                    
                {
                    
                    products && products.map((product) => (
                            ( product.name.match(keyWord) || product.category.match(keyWord) )
                             && <Product product={product} onDelete={onDelete} onUpdate={onUpdate} onProduce={onProduce}/>
                        )
                    )
                }
                
            </div>

            <div className="col-span-1 mx-3">
                {
                    (status.match("Add") && (<AddProduct onSetProduct={onSetProduct} />)) ||
                    (status.match("Update") && (<UpdateProduct product={updateProduct} onSetStatus={onSetStatus} fetchProducts={fetchProducts}/>))||
                    (status.match("Produce") && <ProductProduceTable produceList={produceList} onSetStatus={onSetStatus} fetchProducts={fetchProducts}/>) 
                }
                
            </div>

        </div>
    )
}

export default ProductPage