import axios from "axios"
import { useEffect, useState } from "react"

import SearchBar from "../components/Searchbar"
import SearchByDate from "../components/SearchByDate"
import DeleteByDate from "../components/DeleteByDate"
import { useAuthContext } from "../hooks/useAuthContext"

const ProductSentHistory = ()=>{
    const {user} = useAuthContext()
    const [history, setHistory] = useState([])
    const [keyWord, setKeyWord] = useState('')
    useEffect(()=>{
         fetchHistory()
    },[])

    const fetchHistory = ()=>{
        axios.get(`/showroom/${user.user.branch_id}/sell`)
        .then(response=>{
            setHistory(response.data.filter(e=>e.branch_id===user.user.branch_id && e.cashier_id===user.user.email))
        })
        .catch(error=>{
            console.log(error)
        })
    }

    return (
        <div className="grid grid-cols-3">

            <div className="flex flex-col  ml-10 mr-20 col-span-2">
                    <SearchBar setKeyWord={setKeyWord} />
                        {
                        history.map( item=>(
    // && (user.user.post==="productionmanager"||user.user.branch_id === item.branch_id )
                                    ((item.products.filter(e=> (e.name.match(keyWord)) )).length ) ?  (<div className=" rounded-lg my-5 p-5 bg-white">
                                       <p className="text-gray-500 my-2"><span className="font-bold text-black mr-2">Id:</span>{item._id}</p>
                                        {/* <p className="text-gray-500 my-2"><span className="font-bold text-black mr-2">Showroom Id:</span>{item.branch_id}</p> */}
                                        <p className="text-gray-500 my-2"><span className="font-bold text-black mr-2">Customer Name:</span>{item.customerName}</p>
                                        <p className="text-gray-500 my-2"><span className="font-bold text-black mr-2">Customer Contact:</span>{item.customerContact}</p>

                                        <p className="text-gray-500 my-2"><span className="font-bold text-black mr-2">Sell Date:</span> {new Date(item.sellDate).toLocaleString('en-US',{
                                                            day: 'numeric',
                                                            month: 'short',
                                                            year: 'numeric',
                                                            hour: 'numeric',
                                                            minute: 'numeric',
                                                            second: 'numeric',
                                                            hour12: true
                                                    })}</p>
                                        
                                        {
                                            <div className="overflow-x-auto mt-14 bg-white rounded">
                                                <table className="min-w-full table-auto">
                                                <thead className="border-b">
                                                    <tr>
                                                    <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Category</th>
                                                    <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Name</th>
                                                    <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Amount</th>
                                                    <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {item.products.map((raw) => (
                                                        <tr key={raw.id} className="border-b">
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{raw.category}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{raw.name}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {raw.sellAmount}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{raw.total}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                                </table>

                                                <div className='flex justify-between px-6 py-4 font-bold border-t-2 border-black'>
                                                    <div className="whitespace-nowrap  text-gray-900">Grand Total:</div>
                                                    <div className="mr-14">{item.grandTotal}</div>
                                                </div>
                                            
                                                <div className='m-5 float-right'>
                                            
                                                    <button
                                                        type="submit"
                                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-5"
                                                        onClick={ async ()=>{await axios.delete(`/showroom/${user.user.branch_id}/sell/${item._id}`)
                                                                                fetchHistory()
                                                                            } }
                                                    >
                                                    Delete </button>
                                    
                                    
                                                </div>
                                        
                                        
                                            </div>
                                    
                                        }
                            

                                </div>) : <div></div>
                            )
                            

                            )
                        }
                    
            </div>

            <div className="col-span-1 flex flex-col">
                <SearchByDate setHistory={setHistory} api={`showroom/${user.user.branch_id}/sell`} />
                <DeleteByDate fetchHistory={fetchHistory} api={`showroom/${user.user.branch_id}/sell`} />
            </div>

        </div>
    )
}

export default ProductSentHistory