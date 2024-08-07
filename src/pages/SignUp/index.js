// src/pages/Signup/index.js

import React, { useContext, useEffect, useState } from 'react';
import logo from '../../assets/images/logo.jpg';
import background from '../../assets/images/background.avif';
import { MyContext } from '../../App';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEye, IoEyeOff, IoShieldCheckmark } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { Link, useNavigate} from 'react-router-dom';

import Button from '@mui/material/Button';
import Google from '../../assets/images/Google.png';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import axios from 'axios';
import '../../App.css';

const SignUp = () => {
    const [inputIndex, setInputIndex] = useState(null);
    const [isShowPassword, setisShowPassword] = useState(false);
    const [isShowConfirmPassword, setisShowConfirmPassword] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const context = useContext(MyContext);
    const navigate = useNavigate();

    useEffect(() => {
        context.setisHideSidebarAndHeader(true);
        window.scrollTo(0, 0);
    }, []);

    const focusInput = (index) => {
        setInputIndex(index);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match!')
            return;
        }

        try {
            const response = await axios.post('http://localhost:3900/api/users/signup', {
                name,
                email,
                password
            });
            navigate('/login')
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <img src={background} className='loginBackground' />
            <section className="loginSection signUpSection">
                <div className='row'>
                    <div className='col-md-8 d-flex align-items-center flex-column part1 justify-content-center'>
                        <h1>WELCOME TO<span className='text-sky'> SCI-FORTE</span>, WHERE INNOVATION CONNECTS WITH THE NEXT GENERATION. </h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
                        <div className='w-100 mt-3'>
                            <Link to={'/'} >
                                <Button className='btn-blue btn-lg btn-big'><IoMdHome />GO TO HOME</Button>
                            </Link>
                        </div>
                    </div>
                    <div className='col-md-4'>
                        <div className="loginBox">
                            <div className='logo text-center' >
                                <img src={logo} width="250px" />
                                <h5 className='font-weight-bold mt-4'>Register to new account</h5>
                            </div>
                            {errorMessage && <div className="error-message text-center" style={{color:'red'}}>{errorMessage}</div>}
                            <div className='wrapper mt-3 card border'>
                                <form onSubmit={handleSubmit}>
                                    <div className={`form-group position-relative ${inputIndex === 0 && 'focus'}`}>
                                        <span className='icon'><FaUserCircle /></span>
                                        <input type='text' className='form-control' placeholder='enter your name' value={name} onChange={(e) => setName(e.target.value)} onFocus={() => focusInput(0)} onBlur={() => setInputIndex(null)} autoFocus />
                                    </div>
                                    <div className={`form-group position-relative ${inputIndex === 1 && 'focus'}`}>
                                        <span className='icon'><MdEmail /></span>
                                        <input type='email' className='form-control' placeholder='enter your email' value={email} onChange={(e) => setEmail(e.target.value)} onFocus={() => focusInput(1)} onBlur={() => setInputIndex(null)} />
                                    </div>
                                    <div className={`form-group position-relative ${inputIndex === 2 && 'focus'}`}>
                                        <span className='icon'><RiLockPasswordFill /></span>
                                        <input type={`${isShowPassword ? 'text' : 'password'}`} className='form-control' placeholder='enter your password' value={password} onChange={(e) => setPassword(e.target.value)} onFocus={() => focusInput(2)} onBlur={() => setInputIndex(null)} />
                                        <span className='toggleShowPassword' onClick={() => setisShowPassword(!isShowPassword)}>
                                            {isShowPassword ? <IoEyeOff /> : <IoEye />}
                                        </span>
                                    </div>
                                    <div className={`form-group position-relative ${inputIndex === 3 && 'focus'}`}>
                                        <span className='icon'><IoShieldCheckmark /></span>
                                        <input type={`${isShowConfirmPassword ? 'text' : 'password'}`} className='form-control' placeholder='confirm your password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} onFocus={() => focusInput(3)} onBlur={() => setInputIndex(null)} />
                                        <span className='toggleShowPassword' onClick={() => setisShowConfirmPassword(!isShowConfirmPassword)}>
                                            {isShowConfirmPassword ? <IoEyeOff /> : <IoEye />}
                                        </span>
                                    </div>
                                   
                                    <FormControlLabel required control={<Checkbox />} label="I agree to all terms and conditions" />
                                    <div className='form-group'>
                                        <Button type="submit" className="btn-blue btn-lg w-100 btn-big">SIGN UP</Button>
                                    </div>
                                    <div className='form-group text-center mb-0'>
                                        <div className='d-flex align-items-center justify-content-center or mt-3 mb-3'>
                                            <span className='line'></span>
                                            <span className='txt'>or</span>
                                            <span className='line'></span>
                                        </div>
                                        <Button variant="outlined" className='w-100 btn-lg btn-big loginWithGoogle'>
                                            <img src={Google} width="25px" /> &nbsp; Sign in with google
                                        </Button>
                                    </div>
                                </form>
                                <span className='text-center d-block mt-3'>
                                    Already have an account ? 
                                    <Link to={'/login'} className='link color ml-2'> Login</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SignUp;
