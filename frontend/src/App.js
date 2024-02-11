import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProducPage from './pages/ProducPage'
import ProductForm from './pages/productform';
import Cart from './pages/Cart'
import SellPage from './pages/SellPage';

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar';
import Home from './pages/Home'


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
                              path = '/'
                              element = {<Home />}
                        />

                        <Route 
                              path = '/admin/products/cart'
                              element = {<Cart />}
                        />

                        <Route 
                              path = '/admin/products/sell'
                              element = {<SellPage />}
                        />
                      
                        <Route 
                              path = '/admin/products/add'
                              element = {<ProductForm />}
                        />

                        <Route 
                              path = '/admin/products'
                              element = {<ProducPage />}
                        />


                  </Routes>
              </div>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;