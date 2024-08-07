import { useContext, useEffect, useState } from 'react';
import logo from '../../assets/images/logo.jpg';
import background from '../../assets/images/background.avif';
import { MyContext } from '../../App';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEye, IoEyeOff } from "react-icons/io5";
import Button from '@mui/material/Button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../App.css';

const Login = () => {
    const [inputIndex, setInputIndex] = useState(null);
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const context = useContext(MyContext);
    const navigate = useNavigate();

    useEffect(() => {
        context.setisHideSidebarAndHeader(true);
    }, []);

    const focusInput = (index) => {
        setInputIndex(index);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3900/api/users/login', {
                email,
                password
            });

           
            if (response.data.success) {
                
                navigate('/Dashboard');
            } else {
                setErrorMessage(response.data.message);
            }
        } catch (error) {
            console.error('Login error:', error);
            setErrorMessage('An error occurred during login.');
        }
    };

    return (
        <>
            <img src={background} className='loginBackground' />
            <section className="loginSection">
                <div className="loginBox">
                    <div className='logo text-center'>
                        <img src={logo} width="250px" />
                        <h5 className='font-weight-bold'>Login to Sci-Forte</h5>
                    </div>
                    {errorMessage && <div style={{color:"red"}} className='error-message text-center'>{errorMessage}</div>}
                    <div className='wrapper mt-3 card border'>
                        <form onSubmit={handleSubmit}>
                            <div className={`form-group position-relative ${inputIndex === 0 && 'focus'}`}>
                                <span className='icon'><MdEmail /></span>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='enter your email'
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onFocus={() => focusInput(0)}
                                    onBlur={() => setInputIndex(null)}
                                    autoFocus
                                />
                            </div>

                            <div className={`form-group position-relative ${inputIndex === 1 && 'focus'}`}>
                                <span className='icon'><RiLockPasswordFill /></span>
                                <input
                                    type={`${isShowPassword ? 'text' : 'password'}`}
                                    className='form-control'
                                    placeholder='enter your password'
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onFocus={() => focusInput(1)}
                                    onBlur={() => setInputIndex(null)}
                                />
                                <span className='toggleShowPassword' onClick={() => setIsShowPassword(!isShowPassword)}>
                                    {isShowPassword ? <IoEyeOff /> : <IoEye />}
                                </span>
                            </div>

                          

                            <div className='form-group'>
                                <Button type="submit" className="btn-blue btn-lg w-100 btn-big">SIGN IN</Button>
                            </div>

                            <div className='form-group text-center mb-0'>
                                <Link to={'/forget-password'} className='link'>FORGOT PASSWORD</Link>
                                <div className='d-flex align-items-center justify-content-center or mt-3 mb-3'>
                                    <span className='line'></span>
                                    <span className='txt'>or</span>
                                    <span className='line'></span>
                                </div>
                            </div>
                        </form>
                    </div>

                    <div className='wrapper mt-3 card border footer p-3'>
                        <span className='text-center'>
                            Don't have an account?
                            <Link to={'/signUp'} className='link color ml-2'> Register</Link>
                        </span>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
