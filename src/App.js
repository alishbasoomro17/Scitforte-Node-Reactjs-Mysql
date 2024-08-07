import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import { createContext, useEffect, useState } from 'react';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ConsultantsList from './pages/ConsultantsList';
import ConsultantDetails from './pages/ConsultantsDetails';
import ClientsList from './pages/ClientsList';
import ClientsDetails from './pages/ClientsDetails';
import MainLoginPage from './pages/MainLoginPage'
import ConsultantReg from './pages/ConsultantRegistration'
import ConsultanatLog from './pages/ConsultantRegistration/Index1'
import ClientReg from './pages/ClientRegistration/index'
import ClientLog  from './pages/ClientRegistration/Index1';

const MyContext = createContext();

function App() {

  const [isToggleSideBar, setisToggleSideBar] = useState(false);
  const [isLogin,setIsLogin] = useState(true);
  const [isHideSidebarAndHeader, setisHideSidebarAndHeader] = useState(false);
  const [thememode, setthememode] = useState(true);

  useEffect(()=>{
    if(thememode===true){
      document.body.classList.remove('dark');
      document.body.classList.add('light');
      localStorage.setItem('thememode','light');
    }
    else{
      document.body.classList.remove('light');
      document.body.classList.add('dark');
      localStorage.setItem('thememode','dark');
    }
      
  },[thememode]);


 
  const values={
    isToggleSideBar, 
    setisToggleSideBar,
    isLogin,
    setIsLogin,
    isHideSidebarAndHeader,
    setisHideSidebarAndHeader,
    setthememode,
    thememode
  }

  return (

    <BrowserRouter>
      <MyContext.Provider value={values}>
          {
              isHideSidebarAndHeader!==true &&
              <Header/>
          }
          <div className='main d-flex'>
            {
              isHideSidebarAndHeader!==true &&
                <div className={`sidebarWrapper ${isToggleSideBar === true ? 'toggle' : ''}`}>
                  <Sidebar/>
                </div>
            }
          
            <div className={`content ${isHideSidebarAndHeader===true && 'full'} ${isToggleSideBar === true ? 'toggle' : ''}`}>
              <Routes>
                  <Route path = "/" exact={true} element={<MainLoginPage/>}/>
                  <Route path = "/Dashboard" exact={true} element={<Dashboard/>}/>
                  <Route path = "/login" exact={true} element={<Login/>}/> 
                  <Route path = "/signUp" exact={true} element={<SignUp/>}/> 
                  <Route path = "/ConsultantsList" exact={true} element={<ConsultantsList/>}/>
                  <Route path="/ConsultantsList/details" element={<ConsultantDetails/>} />
                  <Route path = "/ClientsList" exact={true} element={<ClientsList/>}/>
                  <Route path = "/ClientsList/details" exact={true} element={<ClientsDetails/>}/>
                  <Route path = "/ConsultantRegistration" exact={true} element={<ConsultantReg/>}/>
                  <Route path = "/Consultantlog" exact={true} element={<ConsultanatLog/>}/>
                  <Route path = "/ClientReg" exact={true} element={<ClientReg/>}/>
                  <Route path = "/ClientLog" exact={true} element={<ClientLog/>}/>
                  
                  
                  
              </Routes>
            </div>
          </div>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
export {MyContext}
