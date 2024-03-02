import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthContext } from '../hooks/useAuthContext';
import SearchBar from '../components/Searchbar';

function ShowroomProduct() {
  const [products, setProducts] = useState([]);
  const [keyWord, setKeyWord] = useState('');
  const {user} = useAuthContext();

  

  

  useEffect(() => {
        const fetchData = async () => {
        let showroomId = user.user.branch_id;
        await axios.get(`/showroom/${user.user.branch_id}/product`,{
            params : {showroomId}
            //params: {startDate,endDate}
        })
        .then(response=>{
            setProducts(response.data)
            console.log(response.data)
            })
            .catch(error=>{
                console.log(error)
                });
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-col mr-40 justify-center">
      <SearchBar setKeyWord={setKeyWord} />
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-white border-b-2 border-black">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-md font-medium text-gray-900 uppercase tracking-wider">
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-md font-medium text-gray-900 uppercase tracking-wider">
                    Name
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-md font-medium text-gray-900 uppercase tracking-wider">
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-md font-medium text-gray-900 uppercase tracking-wider">
                    In Stock
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {products.map((product) => (
                  (product.name.match(keyWord) || product.category.match(keyWord))&&  <tr key={product.id}>
                    <td className="px-6 py-6 whitespace-nowrap text-sm text-gray-500">
                      {product.category}
                    </td>
                    <td className="px-6 py-6 whitespace-nowrap text-sm text-gray-500">
                      {product.name}
                    </td>
                    <td className="px-6 py-6 whitespace-nowrap text-sm text-gray-500">
                      {product.price}
                    </td>
                    <td className="px-6 py-6 whitespace-nowrap text-sm text-gray-500">
                      {product.inStock}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowroomProduct;
