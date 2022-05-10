import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Pages/Shared/Footer/Footer';
import Header from './components/Pages/Shared/Header/Header';
import NotFound from './components/Pages/Shared/NotFound/NotFound';
import Home from './components/Pages/Home/Home/Home';
import Login from './components/Pages/Login/Login/Login';
import Register from './components/Pages/Login/Register/Register';
import UploadProduct from './components/Pages/UploadProduct/UploadProduct';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import ManageInventory from './components/Pages/ManageInventory/ManageInventory';
import Inventory from './components/Pages/Inventory/Inventory';
import MyItems from './components/Pages/MyItems/MyItems';
import Blogs from './components/Pages/Blogs/Blogs';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register />}></Route>
        <Route path='/uploadPd' element={<PrivateRoute>
          <UploadProduct />
        </PrivateRoute>}></Route>
        <Route path='/manageInventory' element={<PrivateRoute>
          <ManageInventory />
        </PrivateRoute>} ></Route>
        <Route path='/inventory' element={<PrivateRoute>
          <Inventory />
        </PrivateRoute>}></Route>
        <Route path='/myItem' element={<PrivateRoute>
          <MyItems />
        </PrivateRoute>}></Route>
        <Route path='/blog' element={<PrivateRoute>
          <Blogs />
        </PrivateRoute>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
