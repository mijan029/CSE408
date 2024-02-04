import React, { useState } from 'react';

function Table({data}) {

    let total = 0;

    data.map(item => {
        total+=item.price * item.saleAmount
        return 0 
    })


  return (
    <div className="max-w-3xl mx-auto px-4 p-10 bg-blue-100 border-2 rounded-3xl shadow-xl">
      <div className="bg-white shadow-md flex justify-around py-4 rounded-3xl">
        <div className='flex flex-col '>
            <div className='font-bold' >Category</div>
            {
                data.map(item => <div className='my-4 text-center'> {item.category} </div>)
            }
        </div>
        
        <div className='flex flex-col'>
            <div className='font-bold' >Name</div>
            {
                data.map(item => <div className='my-4 text-center'> {item.name} </div>)
            }
        </div>

        <div className='flex flex-col'>
            <div className='font-bold' >Price</div>
            {
                data.map(item => <div className='my-4 text-center'> {item.price} </div>)
            }
        </div>

        <div className='flex flex-col'>
            <div className='font-bold' >Amount</div>
            {
                data.map(item => <div className='my-4 text-center'> {item.saleAmount} </div>)
            }
            <div className='font-bold text-center'>Total</div>
        </div>

        <div className='flex flex-col'>
            <div className='font-bold' >Total Amount</div>
            {
                data.map(item => <div className='my-4 text-center'> {item.saleAmount * item.price} </div>)
                
            }
            <div className='font-bold text-center' >{total}</div>
        </div>
        </div>
    </div>
  );
}

export default Table;