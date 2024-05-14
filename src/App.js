import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Login from './Login';
import { Button, Row } from 'antd';
import Cake from './Cake'
import UserList from './UserList';
import Datatable from './Datatable';
import SignUp from './SignUp';
import Meeting from './Meeting';
import MarkAttendance from './MarkAttendance';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ForgotPass from './ForgotPass';
import EditUser from './EditUser';
import Signup1 from './Signup1';
import Cakelist from './cakelist';
import CakeDetails from './CakeDetails';
import Search from './Search';
import CheckOut from './CheckOut';
import Cart from './Cart';

function App() {
  // var name = "JS Training"
  var allCakes = [{
    image: "BlackForest.jpg",
    name: "Black Forest",
    price: 600
  }, {
    image: "RedVelvett.jpg",
    name: "Red Velvet",
    price: 650,
    tag: "Bestseller"
  }, {
    image: "ChocoTruffle.jpg",
    name: "Choco Truffle",
    price: 700
  }]
  return (
    <div>
      {/*<Row>
        <Cake cakeInfo={cake1}></Cake>
        <Cake cakeInfo={cake2}></Cake>
        <Cake cakeInfo={cake3}></Cake>
        <Cake></Cake>
      </Row>*/}
      {/* <Login/> */}
      {/*<label>{name}</label>
      <Button type='primary'>Demo Antd</Button> */}
      {/* <UserList/> */}
      {/* <DataTable/> */}
      {/* <SignUp/> */}
      {/* <Meeting/> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          {/* <Route path="/forgotPass" element={<ForgotPass></ForgotPass>}></Route> */}
          <Route path="/login" element={<Login></Login>}></Route>
          {/* <Route path="/signup" element={<SignUp></SignUp>}></Route> */}
          <Route path="/search" element={<Search></Search>}></Route>
          <Route path="/cart" element={<Cart></Cart>}></Route>
          <Route path="/checkOut" element={<CheckOut></CheckOut>}></Route>
          <Route path="/editUser/:userid" element={<EditUser></EditUser>}></Route>
          <Route path="/register" element={<Signup1></Signup1>}></Route>
          <Route path="/cakelist" element={<Cakelist></Cakelist>}></Route>
          <Route path="/cakeDetails/:cakeid" element={<CakeDetails></CakeDetails>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
