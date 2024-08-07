import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { FaUserTie } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { BiSolidMessageDetail } from "react-icons/bi";
import { BsBellFill } from "react-icons/bs";
import { IoSettingsSharp } from "react-icons/io5";
import { useContext, useState } from 'react';
import { IoMdPower } from "react-icons/io";
import { MyContext } from '../../App';


import { Dialog, DialogActions, DialogContent, DialogContentText, Checkbox, DialogTitle, FormControlLabel  } from '@mui/material';
import '../../App.css';





const Sidebar = () => {

    const [ activeTab, setActiveTab ] = useState(0);
    const [ isToggleSubmenu, setisToggleSubmenu ] = useState(false);

    const context = useContext(MyContext);

    const isOpenSubmenu = (index) => {
        setActiveTab(index);
        setisToggleSubmenu(!isToggleSubmenu);
    }

    const [open, setOpen] = useState(false);
    const [saveLoginInfo, setSaveLoginInfo] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleLogout = () => {
        // Perform the logout logic here
        console.log('Logged out');
        console.log('Save login info:', saveLoginInfo);
        setOpen(false);
    };

    const handleCheckboxChange = (event) => {
        setSaveLoginInfo(event.target.checked);
    };


    return (
      <>
        <div className="sidebar">
            <ul>
                <li>
                    <Link to="/">
                        <Button className={`w-100 ${activeTab === 0 && isToggleSubmenu === true ? 'active' : ''}`} onClick={()=>isOpenSubmenu(0)}>    
                            <span className='icon'><MdDashboard/></span>  
                                Dashboard 
                            <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </Link>

                    <Link to="/ConsultantsList">
                        <Button className={`w-100 ${activeTab === 1 && isToggleSubmenu === true ? 'active'  : ''}`} onClick={()=>isOpenSubmenu(1)}>    
                            
                            <span className='icon'><FaUserTie/></span>  
                            Consultants
                            <span className='arrow'><FaAngleRight/></span>
                        </Button>
                        </Link>

                        {/*<div className={`submenuWrapper ${activeTab === 1 && isToggleSubmenu === true ? 'colapse' : 'colapsed'}`} >
                            <ul className="submenu">
                                <li>
                                    <Link to="/ConsultantsList">Consultants List</Link>
                                    
                                </li>
                            </ul>
                        </div>
                        */}

                    <Link to="/ClientsList">
                        <Button className={`w-100 ${activeTab === 2 && isToggleSubmenu === true ? 'active' : ''}`} onClick={()=>isOpenSubmenu(2)}>    
                            <span className='icon'><FaUser/></span>  
                                Clients
                            <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </Link>

                    <Link to="/">
                        <Button className={`w-100 ${activeTab === 3 && isToggleSubmenu === true ? 'active' : ''}`} onClick={()=>isOpenSubmenu(3)}>    
                            <span className='icon'><BiSolidMessageDetail/></span>  
                                Messages
                            <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </Link>

                    <Link to="/">
                        <Button className={`w-100 ${activeTab === 4 && isToggleSubmenu === true ? 'active' : ''}`} onClick={()=>isOpenSubmenu(4)}>    
                            <span className='icon'><BsBellFill/></span>  
                                Notifications
                            <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </Link>

                    <Link to="/">
                        <Button className={`w-100 ${activeTab === 5 && isToggleSubmenu === true ? 'active' : ''}`} onClick={()=>isOpenSubmenu(5)}>    
                            <span className='icon'><IoSettingsSharp/></span>  
                                settings
                            <span className='arrow'><FaAngleRight/></span>
                        </Button>
                    </Link>
                    
                </li>
            </ul>

            <br/>
            <div className='logoutWrapper'>
            <div className='logoutBox'>
                <Button variant="contained" className='logoutButton' onClick={handleClickOpen}>
                    <IoMdPower /> Logout
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Are you sure you want to logout?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Do you really want to log out?
                        </DialogContentText>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={saveLoginInfo}
                                    onChange={handleCheckboxChange}
                                    name="saveLoginInfo"
                                    color="primary"
                                />
                            }
                            label="Save login info"
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} className='dialogButtonNo'>
                            No
                        </Button>
                        <Button onClick={handleLogout} className='dialogButtonYes' autoFocus>
                            Yes
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        </div>
        </div>
      </>
    );
  };
  
  export default Sidebar;