import React, { useState, useContext, useEffect } from 'react';
import { FaUserCircle } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import { HiDotsVertical } from "react-icons/hi";
import { Menu, MenuItem, Button } from '@mui/material';
import DashboardBox from "./components/dashboardBox";
import { Chart } from "react-google-charts";
import '../../App.css'; 
import { MyContext } from '../../App';

export const data = [
    ["Year", "Sales", "Expenses"],
    ["2013", 1000, 400],
    ["2014", 1170, 460],
    ["2015", 660, 1120],
    ["2016", 1030, 540],
];

export const options = {
    backgroundColor: 'transparent',
};

const Dashboard = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

   

    const [stats, setStats] = useState({
        totalConsultants: 0,
        totalClients: 0,
        totalAdmins: 0,
        totalUsers: 0
    });

    const ITEM_HEIGHT = 48;

    useEffect(() => {
        fetch('http://localhost:3900/api/dashboard/stats')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched data:', data);
                setStats(data); // Assuming setStats is the function to update state
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <div className="right-content">
        
                <div className="card1 shadow border-0 p-3 mt-4" id="header">
                    <h3>@administrator DashBoard</h3>
                </div>

                <div className="row dashboardBoxWrapperRow">
                    <div className="col-md-8">
                        <div className="dashboardBoxWrapper d-flex">
                            <DashboardBox color={["#1da256", "#48d483"]} icon={<FaUserCircle />} title="Total Consultants" value={stats.totalConsultants} grow={true} />
                            <DashboardBox color={["#c012e2", "#eb64fe"]} icon={<FaUserCircle />} title="Total Clients" value={stats.totalClients} />
                            <DashboardBox color={["#2c78e5", "#60aff7"]} icon={<FaUserCircle />} title="Total Admins" value={stats.totalAdmins} />
                            <DashboardBox color={["#e1950e", "#f3cd29"]} icon={<FaUserCircle />} title="Total Users" value={stats.totalUsers} />
                        </div>
                    </div>

                    <div className="col-md-4 pl-0">
                        <div className="box">
                            <div className="graphBox">
                                <div className="d-flex align-items-center w-100 bottomEle">
                                    <h6 className="text-white mb-0 mt-0">Total Sales/Profits</h6>

                                    <div className='ml-auto'>
                                        <Button className='ml-auto toggleIcon' onClick={handleClick} sx={{ '& svg': { marginRight: '8px !important' } }}><HiDotsVertical /></Button>
                                        <Menu
                                            className='dropdown_menu'
                                            MenuListProps={{
                                                'aria-labelledby': 'long-button',
                                            }}
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            PaperProps={{
                                                style: {
                                                    maxHeight: ITEM_HEIGHT * 4.5,
                                                    width: '20ch',
                                                },
                                            }}
                                        >
                                            <MenuItem onClick={handleClose}>
                                                <IoIosTimer /> Last day
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <IoIosTimer /> Last week
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <IoIosTimer /> Last month
                                            </MenuItem>
                                            <MenuItem onClick={handleClose}>
                                                <IoIosTimer /> Last year
                                            </MenuItem>
                                        </Menu>
                                    </div>
                                </div>

                                <h3 className="text-white font-weight-bold">$3,787,681.00</h3>
                                <p>$3,787,681.00 in last month</p>

                                <Chart
                                    chartType="AreaChart"
                                    width="100%"
                                    height="200px"
                                    data={data}
                                    options={options}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;

