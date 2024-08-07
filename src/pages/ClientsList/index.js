import React, { useState, useContext, useEffect } from 'react';
import { FormControl, TextField, Select, Menu, MenuItem, Button, InputLabel, FormHelperText } from '@mui/material';
import '../../App.css'; 
import { FaEye } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { IoTrashBin } from "react-icons/io5";
import admin from '../../assets/images/admin.png';
import Pagination from '@mui/material/Pagination';
import { MyContext } from '../../App';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';


const ClientsList = () => {
    const [showBy, setshowBy] = useState('');
    const [CatBy, setCatBy] = useState('');
    const [SearchBy, setSearchBy] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    
    const context = useContext(MyContext)

    const ITEM_HEIGHT = 48;

    useEffect(()=>{
        context.setisHideSidebarAndHeader(false);
        window.scrollTo(0,0);
    },[])

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <>
        <div className="right-content">
        <div className="card shadow border-0 p-3 mt-1">
                    <h3 className="hd">Clients profiles</h3>

                    <div className="row cardFilters mt-3">
                        <div className="col-md-3">
                            <h4>Show By</h4>
                            <FormControl size="small" className="w-100">
                                <Select
                                    value={showBy}
                                    onChange={(e) => setshowBy(e.target.value)}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    className="w-100"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Best</MenuItem>
                                    <MenuItem value={20}>Average</MenuItem>
                                    <MenuItem value={30}>Worst</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className="col-md-3">
                            <h4>Category By</h4>
                            <FormControl size="small" className="w-100">
                                <Select
                                    value={CatBy}
                                    onChange={(e) => setCatBy(e.target.value)}
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    className="w-100"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Male</MenuItem>
                                    <MenuItem value={20}>Female</MenuItem>
                                    
                                </Select>
                            </FormControl>
                        </div>
                        <div className="col-md-3">
                            <h4>Search By</h4>
                            <FormControl size="small" className="w-100">
                                <TextField
                                    value={SearchBy}
                                    onChange={(e) => setSearchBy(e.target.value)}
                                    placeholder="Search"
                                    inputProps={{ 'aria-label': 'Search' }}
                                    className="w-100"
                                    variant="outlined"
                                    size="small"
                                />
                            </FormControl>
                        </div>
                    </div>

                    <div className='tabel-responsive mt-3'>
                        <table className='table table-bordered v-align'>
                                                <thead className='thead-dark'>
                                                    <tr>
                                                        <th>UID</th>
                                                        <th style={{width:'300px'}}>CONSULTANTS ID</th>
                                                        <th>CATEGORY</th>
                                                        <th>NAME</th>
                                                        <th>PRICE</th>
                                                        <th>AVAILABILITY</th>
                                                        <th>RATINGS</th>
                                                        <th>SALES</th>
                                                        <th>ACTIONS</th> 
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    <tr>
                                                        <td>#1</td>
                                                        <td>
                                                            
                                                            <div className='d-flex align-items-center descriptionBox'>
                                                                <div className='imageWrapper'>
                                                                    <div className='img'>
                                                                    <img src={admin} className='w-100'/>
                                                                    </div>
                                                                </div>
                                                                <div className='info pl-2'>
                                                                    <h6>0993112e</h6> 
                                                                    <p>Description about consultant's services and qualifications and etc...</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>Male</td>
                                                        <td>Affan</td>
                                                        <td>
                                                            <del className='old'>$498.00</del>
                                                            <span className='new text-danger'>$899.00</span>
                                                        </td>
                                                        <td>24 hours</td>
                                                        <td className='mt-5 ml-2'>
                                                            <FaStar/> 4.8 (5)
                                                            </td>
                                                        <td>aws</td>
                                                        <td>
                                                        <div className='actions d-flex align-items-center'>
                                                            <Link to="/ClientsList/details">
                                                                <Button className='secondary' color="secondary">
                                                                    <FaEye />
                                                                </Button>
                                                            </Link>
                                                                <Button className='success' color="success"><FaPencil/></Button>
                                                                <Button className='error' color="error"><IoTrashBin/></Button>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>#1</td>
                                                        <td>
                                                            
                                                            <div className='d-flex align-items-center descriptionBox'>
                                                                <div className='imageWrapper'>
                                                                    <div className='img'>
                                                                    <img src={admin} className='w-100'/>
                                                                    </div>
                                                                </div>
                                                                <div className='info pl-2'>
                                                                    <h6>0993112e</h6> 
                                                                    <p>Description about consultant's services and qualifications and etc...</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>Male</td>
                                                        <td>Affan Malik</td>
                                                        <td>
                                                            <del className='old'>$498.00</del>
                                                            <span className='new text-danger'>$899.00</span>
                                                        </td>
                                                        <td>24 hours</td>
                                                        <td className='mt-5 ml-2'><FaStar/> 4.8 (5)</td>
                                                        <td>aws</td>
                                                        <td>
                                                        <div className='actions d-flex align-items-center'>
                                                            <Link to="/ClientsList/details">
                                                                <Button className='secondary' color="secondary">
                                                                    <FaEye />
                                                                </Button>
                                                            </Link>
                                                                <Button className='success' color="success"><FaPencil/></Button>
                                                                <Button className='error' color="error"><IoTrashBin/></Button>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>#1</td>
                                                        <td>
                                                            
                                                            <div className='d-flex align-items-center descriptionBox'>
                                                                <div className='imageWrapper'>
                                                                    <div className='img'>
                                                                    <img src={admin} className='w-100'/>
                                                                    </div>
                                                                </div>
                                                                <div className='info pl-2'>
                                                                    <h6>0993112e</h6> 
                                                                    <p>Description about consultant's services and qualifications and etc...</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>Male</td>
                                                        <td>Affan</td>
                                                        <td>
                                                            <del className='old'>$498.00</del>
                                                            <span className='new text-danger'>$899.00</span>
                                                        </td>
                                                        <td>24 hours</td>
                                                        <td className='mt-5 ml-2'><FaStar/> 4.8 (5)</td>
                                                        
                                                        <td>aws</td>
                                                        <td>
                                                        <div className='actions d-flex align-items-center'>
                                                            <Link to="/ClientsList/details">
                                                                <Button className='secondary' color="secondary">
                                                                    <FaEye />
                                                                </Button>
                                                            </Link>
                                                                <Button className='success' color="success"><FaPencil/></Button>
                                                                <Button className='error' color="error"><IoTrashBin/></Button>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>#1</td>
                                                        <td>
                                                            
                                                            <div className='d-flex align-items-center descriptionBox'>
                                                                <div className='imageWrapper'>
                                                                    <div className='img'>
                                                                    <img src={admin} className='w-100'/>
                                                                    </div>
                                                                </div>
                                                                <div className='info pl-2'>
                                                                    <h6>0993112e</h6> 
                                                                    <p>Description about consultant's services and qualifications and etc...</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>Male</td>
                                                        <td>Affan</td>
                                                        <td>
                                                            <del className='old'>$498.00</del>
                                                            <span className='new text-danger'>$899.00</span>
                                                        </td>
                                                        <td>24 hours</td>
                                                        <td className='mt-5 ml-2'><FaStar/> 4.8 (5)</td>
                                                        <td>aws</td>
                                                        <td>
                                                        <div className='actions d-flex align-items-center'>
                                                            <Link to="/ClientsList/details">
                                                                <Button className='secondary' color="secondary">
                                                                    <FaEye />
                                                                </Button>
                                                            </Link>
                                                                <Button className='success' color="success"><FaPencil/></Button>
                                                                <Button className='error' color="error"><IoTrashBin/></Button>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>#1</td>
                                                        <td>
                                                            
                                                            <div className='d-flex align-items-center descriptionBox'>
                                                                <div className='imageWrapper'>
                                                                    <div className='img'>
                                                                    <img src={admin} className='w-100'/>
                                                                    </div>
                                                                </div>
                                                                <div className='info pl-2'>
                                                                    <h6>0993112e</h6> 
                                                                    <p>Description about consultant's services and qualifications and etc...</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>Male</td>
                                                        <td>Affan</td>
                                                        <td>
                                                            <del className='old'>$498.00</del>
                                                            <span className='new text-danger'>$899.00</span>
                                                        </td>
                                                        <td>24 hours</td>
                                                        <td className='mt-5 ml-2'><FaStar/> 4.8 (5)</td>
                                                        <td>aws</td>
                                                        <td>
                                                        <div className='actions d-flex align-items-center'>
                                                            <Link to="/ClientsList/details">
                                                                <Button className='secondary' color="secondary">
                                                                    <FaEye />
                                                                </Button>
                                                            </Link>
                                                                <Button className='success' color="success"><FaPencil/></Button>
                                                                <Button className='error' color="error"><IoTrashBin/></Button>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>#1</td>
                                                        <td>
                                                            
                                                            <div className='d-flex align-items-center descriptionBox'>
                                                                <div className='imageWrapper'>
                                                                    <div className='img'>
                                                                    <img src={admin} className='w-100'/>
                                                                    </div>
                                                                </div>
                                                                <div className='info pl-2'>
                                                                    <h6>0993112e</h6> 
                                                                    <p>Description about consultant's services and qualifications and etc...</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>Male</td>
                                                        <td>Affan</td>
                                                        <td>
                                                            <del className='old'>$498.00</del>
                                                            <span className='new text-danger'>$899.00</span>
                                                        </td>
                                                        <td>24 hours</td>
                                                        <td className='mt-5 ml-2'><FaStar/> 5 (5)</td>
                                                        <td>aws</td>
                                                        <td>
                                                        <div className='actions d-flex align-items-center'>
                                                            <Link to="/ClientsList/details">
                                                                <Button className='secondary' color="secondary">
                                                                    <FaEye />
                                                                </Button>
                                                            </Link>
                                                                <Button className='success' color="success"><FaPencil/></Button>
                                                                <Button className='error' color="error"><IoTrashBin/></Button>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>#1</td>
                                                        <td>
                                                            
                                                            <div className='d-flex align-items-center descriptionBox'>
                                                                <div className='imageWrapper'>
                                                                    <div className='img'>
                                                                    <img src={admin} className='w-100'/>
                                                                    </div>
                                                                </div>
                                                                <div className='info pl-2'>
                                                                    <h6>0993112e</h6> 
                                                                    <p>Description about consultant's services and qualifications and etc...</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>Male</td>
                                                        <td>Affan</td>
                                                        <td>
                                                            <del className='old'>$498.00</del>
                                                            <span className='new text-danger'>$899.00</span>
                                                        </td>
                                                        <td>24 hours</td>
                                                        <td className='mt-5 ml-2'><FaStar/> 4.8 (5)</td>
                                                        <td>aws</td>
                                                        <td>
                                                        <div className='actions d-flex align-items-center'>
                                                            <Link to="/ClientsList/details">
                                                                <Button className='secondary' color="secondary">
                                                                    <FaEye />
                                                                </Button>
                                                            </Link>
                                                                <Button className='success' color="success"><FaPencil/></Button>
                                                                <Button className='error' color="error"><IoTrashBin/></Button>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>#1</td>
                                                        <td>
                                                            
                                                            <div className='d-flex align-items-center descriptionBox'>
                                                                <div className='imageWrapper'>
                                                                    <div className='img'>
                                                                    <img src={admin} className='w-100'/>
                                                                    </div>
                                                                </div>
                                                                <div className='info pl-2'>
                                                                    <h6>0993112e</h6> 
                                                                    <p>Description about consultant's services and qualifications and etc...</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>Male</td>
                                                        <td>Affan</td>
                                                        <td>
                                                            <del className='old'>$498.00</del>
                                                            <span className='new text-danger'>$899.00</span>
                                                        </td>
                                                        <td>24 hours</td>
                                                        <td className='mt-5 ml-2'><FaStar/> 4.8 (5)</td>
                                                        <td>aws</td>
                                                        <td>
                                                        <div className='actions d-flex align-items-center'>
                                                            <Link to="/ClientsList/details">
                                                                <Button className='secondary' color="secondary">
                                                                    <FaEye />
                                                                </Button>
                                                            </Link>
                                                                <Button className='success' color="success"><FaPencil/></Button>
                                                                <Button className='error' color="error"><IoTrashBin/></Button>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td>#1</td>
                                                        <td>
                                                            
                                                            <div className='d-flex align-items-center descriptionBox'>
                                                                <div className='imageWrapper'>
                                                                    <div className='img'>
                                                                    <img src={admin} className='w-100'/>
                                                                    </div>
                                                                </div>
                                                                <div className='info pl-2'>
                                                                    <h6>0993112e</h6> 
                                                                    <p>Description about consultant's services and qualifications and etc...</p>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>Male</td>
                                                        <td>Affan</td>
                                                        <td>
                                                            <del className='old'>$498.00</del>
                                                            <span className='new text-danger'>$899.00</span>
                                                        </td>
                                                        <td>24 hours</td>
                                                        <td className='mt-5 ml-2'><FaStar/> 4.8 (5)</td>
                                                        <td>aws</td>
                                                        <td>
                                                        <div className='actions d-flex align-items-center'>
                                                            <Link to="/ClientsList/details">
                                                                <Button className='secondary' color="secondary">
                                                                    <FaEye />
                                                                </Button>
                                                            </Link>
                                                                <Button className='success' color="success"><FaPencil/></Button>
                                                                <Button className='error' color="error"><IoTrashBin/></Button>
                                                            </div>
                                                        </td>
                                                    </tr>

                                                </tbody>
                        </table>

                        <div className='d-flex tableFooter'>
                            <p>Showing <b>12</b> out of <b>99</b> results</p>
                        <Pagination count={100} variant="outlined" color="primary" className='pagination' showFirstButton showLastButton/>
                        </div>
                    </div>
                </div>
        </div>
        </>
    )
}

export default ClientsList;