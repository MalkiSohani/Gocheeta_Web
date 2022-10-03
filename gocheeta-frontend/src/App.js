import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Pages/Home';
import DriverHome from './Pages/DriverHome';
import AddUser from './users/AddUser';
import EditUser from './users/EditUser';
import ViewUser from './users/ViewUser';
import AddDriver from './users/AddDriver';
import EditDriver from './users/EditDriver';
import ViewDriver from './users/ViewDriver';
import KandyHome from './Pages/KandyHome';
import EditKandy from './users/EditKandy';
import AddKandy from './users/AddKandy';
import ViewKandy from './users/ViewKandy';
import Driver from './FrontendPages/Driver';
import Kandy from './FrontendPages/Kandy';
import HomePage from './layout/HomePage';
import AddUser1 from './users/AddUser1';
import Login from './Pages/Login';
import Navbar from './components/Navbar';
import DKandyHome from './Pages/DKandyHome';
import Login1 from './Pages/Login1';
import AddDKandy from './users/AddDKandy';
import EditDKandy from './users/EditDKandy';
import ViewDKandy from './users/ViewDKandy';
import DKandy from './FrontendPages/DKandy';
import BKandy from './Pages/BKandy';
import AddBKandy from './users/AddBKandy';


function App() {
  return (
    <div className="App">

      
    <Router>
      
        <Routes>
                
                <Route exact path={"/"} element={<HomePage/>}/>
                <Route exact path={"/dashboard"} element={<Navbar/>}/>
                <Route exact path={"/login"} element={<Login/>}/>
                <Route exact path={"/user"} element={<Home/>}/>
                <Route exact path={"/adduser"} element={<AddUser/>}/>
                <Route exact path={"/adduser1"} element={<AddUser1/>}/>
                <Route exact path={"/edituser/:id"} element={<EditUser/>}/>
                <Route exact path={"/viewuser/:id"} element={<ViewUser/>}/>
                <Route exact path={"/driver"} element={<DriverHome/>}/>
                <Route exact path={"/adddriver"} element={<AddDriver/>}/>
                <Route exact path={"/editdriver/:id"} element={<EditDriver/>}/>
                <Route exact path={"/viewdriver/:id"} element={<ViewDriver/>}/>
                <Route exact path={"/kandy"} element={<KandyHome/>}/>
                <Route exact path={"/addkandy"} element={<AddKandy/>}/>
                <Route exact path={"/editkandy/:id"} element={<EditKandy/>}/>
                <Route exact path={"/viewkandy/:id"} element={<ViewKandy/>}/>
                <Route exact path={"/fdriver"} element={<Driver/>}/>
                <Route exact path={"/fkandy"} element={<Kandy/>}/>
                <Route exact path={"/dkandy"} element={<DKandyHome/>}/>
                <Route exact path={"/login1"} element={<Login1/>}/>
                <Route exact path={"/adddkandy"} element={<AddDKandy/>}/>
                <Route exact path={"/editDKandy/:id"} element={<EditDKandy/>}/>
                <Route exact path={"/viewDKandy/:id"} element={<ViewDKandy/>}/>
                <Route exact path={"/fDKandy"} element={<DKandy/>}/>
                <Route exact path={"/bkandy"} element={<BKandy/>}/>
                <Route exact path={"/addbkandy"} element={<AddBKandy/>}/>
                

                
        </Routes>

    </Router>
   </div>
  );
}

export default App;
