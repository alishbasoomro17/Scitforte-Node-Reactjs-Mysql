
import React,{useContext, useState} from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/images/logo.jpg';
import admin from '../../assets/images/admin.png';
import Button from '@mui/material/Button';
import { MdMenuOpen } from "react-icons/md";
import { MdOutlineMenu } from "react-icons/md";
import SearchBox from "../SearchBox";
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { FaGooglePlusG } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaRegBell } from "react-icons/fa6";
import '../../App.css'; 

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Logout from '@mui/icons-material/Logout';
import Divider from '@mui/material/Divider';
import { PiShieldWarningFill } from "react-icons/pi";
import { MyContext } from "../../App";





const Header=()=>{

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [isOpennotificationDrop, setisOpennotificationDrop] = React.useState(false);

    

    const openMyAcc = Boolean(anchorEl);
    const openNotifications = Boolean(isOpennotificationDrop);

    const context = useContext(MyContext)

    const handleOpenMyAccDrop = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleCloseMyAccDrop = () => {
    setAnchorEl(null);
    };

    const handleOpennotificationsDrop = () => {
        setisOpennotificationDrop(true)
    }
    const handleClosenotificationsDrop = () => {
        setisOpennotificationDrop(false)
    }

    


    return(
        <>
            <header className="d-flex align-items-center">
                <div className="container-fluid w-100">
                   <div className="row d-flex align-items-center w-100">
                    {/* logo wrapper */}
                    <div className="col-sm-2 part1">
                        <Link to={'/'} className="d-flex align-items-center logo ">
                            <img src={logo} />
                            <span className="ml-2"></span>
                        </Link>
                    </div>

                    <div className="col-sm-3 d-flex align-items-center part2 ">
                        <Button className="rounded-circle mr-3" onClick={()=>context.setisToggleSideBar(!context.isToggleSideBar)}>
                            {
                                context.isToggleSideBar===false ? <MdMenuOpen/> : <MdOutlineMenu/>

                            }
                        </Button>
                        <SearchBox/>
                    </div>

                    <div className="col-sm-7 d-flex align-items-center justify-content-end part3">
                        <Button className="rounded-circle mr-3 " onClick={()=> context.setthememode(!context.thememode)}>
                            <MdOutlineLightMode/>
                        </Button>
                        <Button className="rounded-circle mr-3"><FaGooglePlusG/></Button>
                        <Button className="rounded-circle mr-3"><MdOutlineMailOutline/></Button>
                        
                        <div className="dropdownWrapper position-relative">
                        <Button className="rounded-circle mr-3" onClick={handleOpennotificationsDrop}><FaRegBell/></Button>
                             <Menu
                                    anchorEl={isOpennotificationDrop}
                                    className="notifications dropdown_list"
                                    id="notifications"
                                    
                                    open={openNotifications}
                                    onClose={handleClosenotificationsDrop}
                                    onClick={handleClosenotificationsDrop}
                                    
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                >
                                        <div className="head pl-3 pb-0">
                                            <h4>Notifications (12) </h4>
                                        </div>
                                        <Divider className="mb-1"/>
                                            <div className="scroll">
                                                        <MenuItem onClick={handleCloseMyAccDrop}>
                                                    <div className="d-flex ">
                                                        <div>
                                                            <div className="userImg">
                                                                <span className="rounded-circle">
                                                                    <img src={admin} />
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="dropdownInfo">
                                                            <h4><span><b>Mahmudul</b> added to his favourite list 
                                                                <b>Leather belt stevemadden</b>
                                                            </span></h4>
                                                            <p className="text-sky">
                                                                few seconds ago
                                                            </p>
                                                        </div>
                                                    </div>
                                                </MenuItem>

                                                <MenuItem onClick={handleCloseMyAccDrop}>
                                                    <div className="d-flex ">
                                                        <div>
                                                            <div className="userImg">
                                                                <span className="rounded-circle">
                                                                    <img src={admin} />
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="dropdownInfo">
                                                            <h4><span><b>Mahmudul</b> added to his favourite list 
                                                                <b>Leather belt stevemadden</b>
                                                            </span></h4>
                                                            <p className="text-sky">
                                                                few seconds ago
                                                            </p>
                                                        </div>
                                                    </div>
                                                </MenuItem>  

                                                <MenuItem onClick={handleCloseMyAccDrop}>
                                                    <div className="d-flex ">
                                                        <div>
                                                            <div className="userImg">
                                                                <span className="rounded-circle">
                                                                    <img src={admin} />
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="dropdownInfo">
                                                            <h4><span><b>Mahmudul</b> added to his favourite list 
                                                                <b>Leather belt stevemadden</b>
                                                            </span></h4>
                                                            <p className="text-sky">
                                                                few seconds ago
                                                            </p>
                                                        </div>
                                                    </div>
                                                </MenuItem> 
                                                
                                                <MenuItem onClick={handleCloseMyAccDrop}>
                                                    <div className="d-flex ">
                                                        <div>
                                                            <div className="userImg">
                                                                <span className="rounded-circle">
                                                                    <img src={admin} />
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="dropdownInfo">
                                                            <h4><span><b>Mahmudul</b> added to his favourite list 
                                                                <b>Leather belt stevemadden</b>
                                                            </span></h4>
                                                            <p className="text-sky">
                                                                few seconds ago
                                                            </p>
                                                        </div>
                                                    </div>
                                                </MenuItem> 

                                                <MenuItem onClick={handleCloseMyAccDrop}>
                                                    <div className="d-flex ">
                                                        <div>
                                                            <div className="userImg">
                                                                <span className="rounded-circle">
                                                                    <img src={admin} />
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="dropdownInfo">
                                                            <h4><span><b>Mahmudul</b> added to his favourite list 
                                                                <b>Leather belt stevemadden</b>
                                                            </span></h4>
                                                            <p className="text-sky">
                                                                few seconds ago
                                                            </p>
                                                        </div>
                                                    </div>
                                                </MenuItem> 

                                                <MenuItem onClick={handleCloseMyAccDrop}>
                                                    <div className="d-flex ">
                                                        <div>
                                                            <div className="userImg">
                                                                <span className="rounded-circle">
                                                                    <img src={admin} />
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="dropdownInfo">
                                                            <h4><span><b>Mahmudul</b> added to his favourite list 
                                                                <b>Leather belt stevemadden</b>
                                                            </span></h4>
                                                            <p className="text-sky">
                                                                few seconds ago
                                                            </p>
                                                        </div>
                                                    </div>
                                                </MenuItem> 

                                                <MenuItem onClick={handleCloseMyAccDrop}>
                                                    <div className="d-flex ">
                                                        <div>
                                                            <div className="userImg">
                                                                <span className="rounded-circle">
                                                                    <img src={admin} />
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="dropdownInfo">
                                                            <h4><span><b>Mahmudul</b> added to his favourite list 
                                                                <b>Leather belt stevemadden</b>
                                                            </span></h4>
                                                            <p className="text-sky mb-0">
                                                                few seconds ago
                                                            </p>
                                                        </div>
                                                    </div>
                                                </MenuItem> 
                                            </div>

                                            <div className="pl-3 pr-3 w-100 pt-2 pb-1">
                                                <Button className="btn-blue w-100" >view all notifications</Button>
                                            </div>
                             </Menu>


                        </div>
                            
                            {
                                context.isLogin !== true ? 
                                <Link to={'/login'}>
                                    <Button className="btn-blue btn-lg btn-round">Sign in</Button>
                                </Link>
                                :
                                <div className="myAccWrapper">
                                <Button className="myAcc d-flex align-items-center" onClick={handleOpenMyAccDrop}>
                                  <div className="userImg">
                                        <span className="rounded-circle">
                                          <img src={admin} />
                                      </span>
                                  </div>
                                  <div className="userInfo">
                                    <h4>Alishba Fatima</h4>
                                    <p className="mb-0">@administrator</p>
                                  </div>
                                </Button> 
                                <Menu
                                    anchorEl={anchorEl}
                                    id="account-menu"
                                    open={openMyAcc}
                                    onClose={handleCloseMyAccDrop}
                                    onClick={handleCloseMyAccDrop}
                                    
                                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                    >
                                    
                                    <MenuItem onClick={handleCloseMyAccDrop}>
                                        <ListItemIcon>
                                        <PersonAdd fontSize="small" />
                                        </ListItemIcon>
                                        My Account
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseMyAccDrop}>
                                        <ListItemIcon>
                                        <PiShieldWarningFill />
                                        </ListItemIcon>
                                        Reset Password
                                    </MenuItem>
                                    <MenuItem onClick={handleCloseMyAccDrop}>
                                        <ListItemIcon>
                                        <Logout fontSize="small" />
                                        </ListItemIcon>
                                        Logout
                                    </MenuItem>
                                </Menu>
                                </div>
    
                            }

                            
                        

                    </div>

                   </div>
                </div>
            </header>
        </>
    )
}

export default Header;