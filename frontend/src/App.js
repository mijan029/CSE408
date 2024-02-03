import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Sales/pages/Home'
import ProductForm from './Sales/pages/productform';
import Cart from './Sales/pages/Cart'

import Navbar from './Sales/components/Navbar'
import Sidebar from './Sales/components/Sidebar';



function App() {
  
  return (
    <div className='App'>
      <BrowserRouter>
        <div className='navbar'>
            <Navbar />
        </div>
        <div className='grid grid-cols-5 h-dvh'>
            <Sidebar />

              <div className='col-span-4 bg-gray-100 py-4'> 
                  <Routes>

                        <Route 
                              path = '/admin/product/cart'
                              element = {<Cart />}
                        />
                      
                        <Route 
                              path = '/admin/product/add'
                              element = {<ProductForm />}
                        />

                        <Route 
                              path = '/admin/product'
                              element = {<Home />}
                        />


                  </Routes>
              </div>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;