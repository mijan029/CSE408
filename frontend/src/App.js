import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ProducPage from './pages/ProducPage'
import ProductForm from './pages/productform';
import Cart from './pages/Cart'

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
                        


                  </Routes>
              </div>

        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;