import axios from "axios"
import { useEffect, useState } from "react"
import { useAuthContext } from "../hooks/useAuthContext"


const OrderShowroom = ()=>{
    const {user} = useAuthContext()
    const [orders, setOrders] = useState([])
    useEffect(()=>{
        fetchRequests()
    },[])

    const fetchRequests = ()=>{
        axios.get('/factory/product/orderHistory')
        .then(response=>{
            setOrders(response.data.filter(e=>e.status==="Ordered" || e.status==="Approved" || e.status==="Rejected"))
        })
        .catch(error=>{
            console.log(error)
        })
    }

    return (
        <div className="grid grid-cols-3">

            <div className="flex flex-col  ml-10 mr-20 col-span-2">
                        {
                        orders.map(item=>(
    
                                    (user.user.branch_id === item.branch_id) &&    <div className=" rounded-lg my-5 p-5 bg-white">
                                        <p className="text-gray-500 my-2"><span className="font-bold text-black mr-2">Id:</span> {item._id}</p>
                                        <p className="text-gray-500 my-2"><span className="font-bold text-black mr-2">Request Date:</span> {new Date(item.orderDate).toLocaleString('en-US',{
                                                            day: 'numeric',
                                                            month: 'short',
                                                            year: 'numeric',
                                                            hour: 'numeric',
                                                            minute: 'numeric',
                                                            second: 'numeric',
                                                            hour12: true
                                                    })}</p>
                                        { (item.status==="Approved"||item.status==="Rejected") && <p className="text-gray-500 my-2"><span className="font-bold text-black mr-2">{item.status} Date: </span>{new Date(item.approveDate).toLocaleString('en-US',{
                                                            day: 'numeric',
                                                            month: 'short',
                                                            year: 'numeric',
                                                            hour: 'numeric',
                                                            minute: 'numeric',
                                                            second: 'numeric',
                                                            hour12: true
                                                    })}</p>}
                                        <p className="font-bold"> <span className="mr-2">Status:</span> <span className={`${item.status==="Ordered"?"text-blue-500":(item.status==="Rejected"?"text-red-500":"text-green-500")} font-bold`}>{item.status}</span> </p>
                                        {
                                            <div className="overflow-x-auto mt-14 bg-white rounded">
                                                <table className="min-w-full table-auto">
                                                <thead className="border-b">
                                                    <tr>
                                                    <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Category</th>
                                                    <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Name</th>
                                                    <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Price</th>
                                                    <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Amount</th>
                                                    <th className="text-sm font-medium text-gray-900 px-6 py-4 text-left">Total</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {item.Materials.map((raw) => (
                                                        <tr key={raw.id} className="border-b">
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{raw.category}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{raw.name}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{raw.price}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                        {raw.orderAmount}
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
                                            
                                                <div className='m-5 float-right'>
                                                    {
                                                        item.status==="Approved" || item.status==="Rejected"?
                                                        <button
                                                        type="submit"
                                                        className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                                                        onClick={ async ()=>{
                                                                const updatedItem = {...item, status:(item.status==="Approved"?"Successful":"Cancelled")}
                                                                await axios.put(`/factory/product/orderHistory/${item._id}`,updatedItem)
                                                                
                                                                await axios.get(`/showroom/${user.user.branch_id}/product`)
                                                                .then((response)=>{

                                                                    item.Materials.map((e)=>{
                                                                        response.data.map(f=>{
                                                                            if(e.name===f.name && e.category===f.category){
                                                                                axios.put(`/showroom/${user.user.branch_id}/product/${f._id}`, {...f, inStock:f.inStock+e.orderAmount})
                                                                            }
                                                                        })
                                                                    })
                                                                        
                                                                }).catch((error)=>{
                                                                    console.log(error);
                                                                })

                                                                fetchRequests()
                                                                            } }
                                                        >
                                                        Ok </button>
                                                        :
                                                        <button
                                                            type="submit"
                                                            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mx-5"
                                                            onClick={ async ()=>{await axios.delete(`/factory/product/orderHistory/${item._id}`)
                                                                                    fetchRequests()
                                                                                } }
                                                        >
                                                        Cancel </button>
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

export default OrderShowroom