import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { AuthContextProvider } from './context/AuthContext';
import ProducPage from './pages/ProductPage'
import Cart from './pages/Cart'
import SellPage from './pages/SellPage';

import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar';
import Home from './pages/Home'
import SellHistoryPage from './pages/SellHistory';
//Employees
import EmployeePage from "./pages/EmployeePage";
import AddEmployee from "./components/AddEmployee";
import UpdateEmployeeForm from "./components/UpdateEmployee";
import EmployeeAccount from "./pages/EmployeeAccountPage";
import EmployeeAttendancePage from "./pages/EmployeeAttendancePage";
import SubmitAttendanceForm from "./components/SubmitAttendanceForm";
import ViewAttendanceRecords from "./components/ViewAttendanceRecords";
import SearchAttendanceRecords from "./components/SearchAttendanceRecords";

import EmployeePerformancePage from "./pages/EmployeePerformancePage";
import RawPage from './pages/RawPage';
import RawPurchaseHistory from './components/RawPurchaseHistory';

import Signup from './pages/Signup';
import Login from './pages/Login';
import RawPageProduction from './pages/RawPageProduction';
import RequestProduction from './pages/RequestProduction';
import RequestRaw from './pages/RequestRaw';
import RawUseHistory from './pages/RawUseHistory';
import ProduceHistory from './components/ProduceHistory';
import ProductPageShowroom from './pages/ProductPageShowroom';
import OrderShowroom from './pages/OrderShowroom';
import OrderProduction from './pages/OrderProduction';
import ProductSentHistory from './pages/ProductSentHistory';
import ProfilePage from './pages/ProfilePage';
import EditProfilePage from './pages/EditProfilePage';
import ShowroomProduct from './pages/ShowroomProduct';
import SellHistoryManager from './pages/SellHistoryManager';
import { useAuthContext } from './hooks/useAuthContext';
import { useEffect, useState } from 'react';


function App() {

  const {user} = useAuthContext()
  const [uuser, setUuser] = useState(null)

  useEffect(()=>{
    setUuser(user)
  },[])
  
  return (
    <div className='h-full' style={{backgroundColor:'rgb(236,244,244)'}}>
      <BrowserRouter>
      <AuthContextProvider>
        <div className='navbar'>
            <Navbar />
        </div>
        <div className='grid grid-cols-6 h-auto'>
            { (uuser||user) && <Sidebar />}

              <div className='col-span-5 h-auto ml-5 py-4' > 
                <Routes>

                  <Route path = '/' element = {<Home setUuser={setUuser}/>}/>

                  <Route path = '/admin/products/cart' element = {<Cart />}/>

                  

                 

                  
                  <Route path="/employees" element={<EmployeePage />} />

                  <Route
                    path="/employees/:id/update"
                    element={<UpdateEmployeeForm />}
                  />
                  <Route path="/employees/add" element={<AddEmployee />} />
                  <Route path="/accounts" element={<EmployeeAccount />} />
                  <Route
                    path="/employeesAttendance"
                    element={<EmployeeAttendancePage />}
                  />
                  <Route
                    path="/employeesAttendance/add"
                    element={<SubmitAttendanceForm />}
                  />
                  <Route
                    path="/employeesAttendance/search"
                    element={<ViewAttendanceRecords />}
                  />
                  <Route
                    path="/employeesPerformance"
                    element={<EmployeePerformancePage />}
                  />

                  {/* Showroom Routes */}
                  <Route path = 'showroom/:id/sellHistory' element = {<SellHistoryPage />} />
                  <Route path = '/showroom/:id/sell' element = {<SellPage />} />
                  <Route path = "/showroom/:id/product" element = {<ShowroomProduct />} />
                  <Route path = "/showroom/Order" element = {<OrderShowroom />}/>
                  <Route path = "/showroom/order-to-factory" element = {<ProductPageShowroom />} />
                  <Route path = "/showroom/sellHistory" element = {<SellHistoryManager />} />



                  {/* These route for raw side */}
                  <Route path = "/factory/raw" element = {<RawPage/>} />
                  <Route path = "/factory/raw/purchaseHistory" element = {<RawPurchaseHistory/>} />
                  <Route path = "/factory/raw/requestHistory" element = {<RawUseHistory/>} />
                  <Route path = "/factory/raw/requests" element = {<RequestRaw/>} />

                  <Route path="/signup" element={<Signup />} />
                  <Route path="/login" element={<Login />} />   

                  {/* These routes for production sites */}
                  <Route path = "/factory/production/orderHistory" element = {<ProductSentHistory />}/>
                  <Route path = "/factory/production/Order" element = {<OrderProduction />}/>
                  <Route path = '/factory/production' element = {<ProducPage />}/>
                  <Route path = "/factory/production/produceHistory" element = {<ProduceHistory/>} />
                  <Route path = "/factory/production/raws" element = {<RawPageProduction/>} />
                  <Route path = "/factory/production/requests" element = {<RequestProduction/>} />
                  <Route path = "/profile" element = {<ProfilePage/>} />
                  <Route path = "/profile/edit" element = {<EditProfilePage/>} />

                </Routes>
              </div>

        </div>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;