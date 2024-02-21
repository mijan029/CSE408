import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { AuthProvider } from './hooks/AuthContext';
import ProducPage from './pages/ProducPage'
import ProductForm from './pages/productform';
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


function App() {
  
  return (
    <div className='App h-dvh' style={{backgroundColor:'rgb(236,244,244)'}}>
      <BrowserRouter>
      <AuthProvider>
        <div className='navbar'>
            <Navbar />
        </div>
        <div className='grid grid-cols-6 h-auto'>
            <Sidebar />

              <div className='col-span-5 ml-5 py-4' > 
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
                        <Route 
                              path = '/admin/sell-history'
                              element = {<SellHistoryPage />}
                        />
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



                {/* These route for raw side */}
                <Route path = "/factory/raw" element = {<RawPage/>} />
                <Route path = "/factory/raw/purchaseHistory" element = {<RawPurchaseHistory/>} />

                <Route path="/signup" element={<Signup />} />
                <Route path="/login" element={<Login />} />   


                  </Routes>
              </div>

        </div>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;