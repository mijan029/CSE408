import React, { useState } from 'react';
import axios from 'axios';

const DeleteByDate = ({ fetchHistory, api }) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSearch = () => {
    axios.delete(api, {
        params: {startDate,endDate}
    })
      .then((response) => {
        fetchHistory()
      })
      .catch((error) => {
        console.error('Error fetching history records:', error);
      });
  };

  return (
    <div className="space-x-4 mt-5 mr-5 bg-white rounded-lg p-3 shadow">
        <div className='font-bold text-xl px-4 text-red-500'>Delete By Range of Date</div>
        <div>
            <span className='font-bold mr-2'>Start:</span> <input
                type="datetime-local"
                className="border border-gray-300 rounded px-4 py-2 my-5"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
      /></div>
      <div >
            <span className='font-bold mr-4'>End: </span><input
                type="datetime-local"
                className="border border-gray-300 rounded px-4 py-2 my-5"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
      /></div>
      <button
        className="bg-red-500 hover:bg-red-600 text-white rounded px-4 py-2 mt-5 ml-1"
        onClick={handleSearch}
      >
        Delete
      </button>
    </div>
  );
};

export default DeleteByDate;