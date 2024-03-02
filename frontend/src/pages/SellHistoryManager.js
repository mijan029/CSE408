import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuthContext } from '../hooks/useAuthContext';
import SearchByDate from '../components/SearchByDate';
import SearchBar from '../components/Searchbar';
import DeleteByDate from '../components/DeleteByDate';

function SellHistoryManager() {
  const [products, setProducts] = useState([]);
  const [keyWord, setKeyWord] = useState('')
  const {user} = useAuthContext();

  

  const fetchData = async () => {
    setProducts([])
    try {
      const sellResponse = await axios.get(`/showroom/${user.user.branch_id}/sell`);
      const allSaleProducts = sellResponse.data.filter(
        (product) => product.branch_id === user.user.branch_id
      );
  
      let showroomId = user.user.branch_id;
      const productResponse = await axios.get(`/showroom/${showroomId}/product`, {
        params: { showroomId },
      });
  
      const managerProducts = productResponse.data;
      console.log(managerProducts);
  
      managerProducts.forEach((mp) => {
        let cost = 0;
  
        allSaleProducts.forEach((sp) => {
          sp.products.forEach((spp) => {
            if (spp.name === mp.name && spp.category === mp.category) {
              cost += spp.total;
            }
          });
        });
  
        // setProducts([...products, { name: mp.name, category: mp.category, totalSell: cost }]);
        setProducts((prevProducts) => (prevProducts.find((p) => p.name === mp.name && p.category === mp.category) ? prevProducts : [
            ...prevProducts,
            { name: mp.name, category: mp.category, totalSell: cost },
          ])
        );
      });
  
      console.log(products);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="grid grid-cols-3">

            <div className="flex flex-col col-span-2 mr-6 mt-6">
                <SearchBar setKeyWord={setKeyWord} />
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className=" overflow-hidden border-b  sm:rounded-lg">
                    <table className="min-w-full divide-y ">
                    <thead className="bg-white border-black border-b-2">
                        <tr>
                        <th scope="col" className="px-6 py-3 text-left text-lg font-bold text-gray-900 ">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-lg font-bold text-gray-900 ">
                            Name
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-lg font-bold text-gray-900 ">
                            Total Sell
                        </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        
                        {products.map((product) => (
                        (product.name.match(keyWord) || product.category.match(keyWord))&&<tr key={product.id}>
                            <td className="px-6 py-6 whitespace-nowrap text-sm text-gray-500">
                            {product.category}
                            </td>
                            <td className="px-6 py-6 whitespace-nowrap text-sm text-gray-500">
                            {product.name}
                            </td>
                            <td className="px-6 py-6 whitespace-nowrap text-sm text-gray-500">
                            {product.totalSell}
                            </td>
                        </tr>
                        ))}
                    </tbody>
                    </table>
                </div>
                </div>
            </div>
            </div>
    <div className="col-span-1 flex flex-col">
        <SearchByDate setHistory={products} api={`showroom/${user.user.branch_id}/sell`} />
        <DeleteByDate fetchHistory={products} api={`showroom/${user.user.branch_id}/sell`} />
    </div>

    </div>
  );
}

export default SellHistoryManager;
