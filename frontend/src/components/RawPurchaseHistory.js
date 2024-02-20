import axios from "axios"
import { useEffect, useState } from "react"

const RawPurchaseHistory = ()=>{
    const [history, setHistory] = useState([])
    useEffect(  ()=>{
         axios.get('/factory/raw/purchaseHistory/')
        .then(response=>{
            setHistory(response.data)
        })
        .catch(error=>{
            console.log(error)
        })
    },[])

    return (
        <div className="flex flex-col">

            <div>
                {
                    history.map( item=>(
                        <div>
                            <p className="text-gray-500">Id: {item._id}</p>
                            <p className="text-gray-500">Date & Time: {item.purchaseDate}</p>
                            {
                                <div className="overflow-x-auto mt-14 bg-white rounded">
                                    <table className="min-w-full table-auto">
                                    <thead className="border-b">
                                        <tr>
                                        <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Name</th>
                                        <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Price</th>
                                        <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Amount</th>
                                        <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {item.purchaseList.map((raw) => (
                                            <tr key={raw.id} className="border-b">
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{raw.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{raw.price}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                <input 
                                                type="number" 
                                                className="mt-1 block w-1/2 px-3 py-2 border-2 border-black rounded-lg" 
                                                value={raw.purchaseAmount} 
                                                
                                                />
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{raw.total}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                    </table>

                                    <div className='flex justify-between px-6 py-4 font-bold border-t-2 border-black'>
                                        <div className="whitespace-nowrap  text-gray-900">Grand Total:</div>
                                        <div>{item.grandTotal}</div>
                                    </div>
                                
                                    <div className='m-5 float-right'>
                                
                                        <button
                                        type="submit"
                                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-5"
                                        >
                                        Delete </button>
                        
                        
                                    </div>
                            
                            
                                </div>
                          
                            }
                        </div>
                    )
                        

                    )
                }
            </div>

        </div>
    )
}

export default RawPurchaseHistory