import axios from "axios"
import { useEffect, useState } from "react"


const RequestRaw = ()=>{
    const [requests, setRequests] = useState([])
    useEffect(()=>{
        fetchRequests()
    },[])

    const fetchRequests = ()=>{
        axios.get('/factory/raw/requestOrderHistory')
        .then(response=>{
            setRequests(response.data.filter(e=>e.status==="Requested" || e.status==="Approved"))
        })
        .catch(error=>{
            console.log(error)
        })
    }

    const handleApprove = async (item)=>{
        item.rawMaterials.forEach(async (raw)=>{
            const rawItem = await axios.get(`/factory/raw/${raw.id}`)
            const updateRaw = {...rawItem.data, inStock:rawItem.data.inStock-raw.requestAmount}
            await axios.put(`/factory/raw/${raw.id}`,updateRaw)
        })

        const updateItem = {...item, status:"Approved" , approveDate: new Date()}
        await axios.put(`/factory/raw/requestOrderHistory/${item._id}`,updateItem)
        fetchRequests()
    }

    return (
        <div className="grid grid-cols-3">

            <div className="flex flex-col  ml-10 mr-20 col-span-2">
                        {
                        requests.map( item=>(
    
                                    <div className=" rounded-lg my-5 p-5 bg-white">
                                        <p className="text-gray-500 my-2"><span className="font-bold text-black mr-2">Id:</span> {item._id}</p>
                                        <p className="text-gray-500 my-2"><span className="font-bold text-black mr-2">Request Date:</span> {new Date(item.requestDate).toLocaleString('en-US',{
                                                            day: 'numeric',
                                                            month: 'short',
                                                            year: 'numeric',
                                                            hour: 'numeric',
                                                            minute: 'numeric',
                                                            second: 'numeric',
                                                            hour12: true
                                                    })}</p>
                                        { item.status==="Approved" && <p className="text-gray-500 my-2"><span className="font-bold text-black mr-2">Approve Date: </span>{new Date(item.approveDate).toLocaleString('en-US',{
                                                            day: 'numeric',
                                                            month: 'short',
                                                            year: 'numeric',
                                                            hour: 'numeric',
                                                            minute: 'numeric',
                                                            second: 'numeric',
                                                            hour12: true
                                                    })}</p>}
                                        <p className="font-bold"> <span className="mr-2">Status:</span> <span className={`${item.status==="Requested"?"text-blue-500":"text-green-500"} font-bold`}>{item.status}</span> </p>
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
                                                    {item.rawMaterials.map((raw) => (
                                                        <tr key={raw.id} className="border-b">
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{raw.name}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{raw.price}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {raw.requestAmount}
                                                        </td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{raw.total}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                                </table>

                                                <div className='flex justify-between px-6 py-4 font-bold border-t-2 border-black'>
                                                    <div className="whitespace-nowrap  text-gray-900">Grand Total:</div>
                                                    <div className="mr-16 pr-2">{item.grandTotal}</div>
                                                </div>
                                            
                                                <div >
                                                    {
                                                        item.status==="Approved" ? <div></div>:<div className='m-5 flex justify-between'>
                                                        <button
                                                            type="submit"
                                                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                                            onClick={ () => handleApprove(item) }
                                                        >
                                                        Approve </button>
                                                        
                                                        <button
                                                            type="submit"
                                                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-5"
                                                            onClick={ async ()=>{
                                                                const updateItem = {...item, status:"Rejected", approveDate: new Date()}
                                                                await axios.put(`/factory/raw/requestOrderHistory/${item._id}`,updateItem)
                                                                fetchRequests()
                                                                                } }
                                                        >
                                                        Reject </button></div>
                                                    
                                                    }
                                    
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

export default RequestRaw