import React, { useContext, useEffect, useState } from 'react';
import logo from '../../assets/images/logo.jpg';
import background from '../../assets/images/background.avif';
import { MyContext } from '../../App';
import axios from 'axios';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { FaUserCircle, FaCity, FaBusinessTime } from "react-icons/fa";
import { MdOutlineGroups2, MdWork } from "react-icons/md";
import { IoMdPerson, IoMdHome } from "react-icons/io";
import { Link, useNavigate} from 'react-router-dom';
import Button from '@mui/material/Button';
import '../../App.css';

const ConsultantRegistration = () => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [chargeMode, setChargeMode] = useState('');
    const [country, setCountry] = useState('');
    const [timeSlot, setTimeSlot] = useState('');
    const [services, setServices] = useState('');
    const [experience, setExperience] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [isInvalidAge, setIsInvalidAge] = useState(false);
    const [isInvalidExperience, setIsInvalidExperience] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [inputIndex, setInputIndex] = useState(null);
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);
    const context = useContext(MyContext);
    const navigate = useNavigate();

    useEffect(() => {
        context.setisHideSidebarAndHeader(true);
        window.scrollTo(0, 0);
    }, [context]);

    const passwordsMatch = password === confirmPassword;

    const focusInput = (index) => {
        setInputIndex(index);
    };

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleChargeModeChange = (event) => {
        setChargeMode(event.target.value);
    };

    const handleTimeSlotChange = (event) => {
        setTimeSlot(event.target.value);
    };
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleServiceChange = (event) => {
        const options = Array.from(event.target.selectedOptions, option => option.value);
        setServices(options);
    };

    const handleExperienceChange = (event) => {
        const value = event.target.value;
        setExperience(value);
        const numericValue = Number(value);
        setIsInvalidExperience(numericValue < 2 || numericValue > 60);
    };

    const handleAgeChange = (event) => {
        const value = event.target.value;
       
        const numericValue = Number(value);
        setIsInvalidAge(numericValue < 18 || numericValue > 60);
        setAge(value);
    };

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleBlur = () => {
        const valid = validateEmail(email);
        setIsValid(valid);
        setInputIndex(null);
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); 

    

        try {
            const response = await axios.post('http://localhost:3900/api/consultants/register', {
                name,
                gender,
                chargeMode,
                country,
                timeSlot,
                services,
                experience,
                age,
                email,
                password
            });
            
            navigate('/Consultantlog')
        } catch (error) {
            console.error('There was an error registering the consultant!', error);
            alert('Registration failed. Please try again.');
        }
    };

    return (
        <>
            <style>
                {`
                    .signUpSection .loginBox {
                        background: white !important;
                    }
                    .signUpSection .loginBox .wrapper {
                        border: 0px !important;
                        background: white !important;
                    }
                    .loginSection .row .part1 {
                        margin-top: 300px !important;
                    }
                    .form-group .form-control {
                        padding-left: 40px;
                        padding-right: 40px;
                    }
                    .form-group {
                        position: relative;
                        margin-bottom: 20px;
                    }
                    .showPassword {
                        position: absolute;
                        top: 50%;
                        right: 10px;
                        transform: translateY(-50%);
                        cursor: pointer;
                    }
                `}
            </style>
            <img src={background} className='loginBackground' alt='background' />
            <section className="loginSection signUpSection">
                <div className='row'>
                    <div className='col-md-8 d-flex align-items-center flex-column part1'>
                        <h1>WELCOME TO<span className='text-sky'> SCIT-FORTE</span>, YOUR TRUSTED PLATFORM FOR SEAMLESS TAX SERVICES.</h1>
                        <p>Effortless Tax Solutions Anytime, Anywhere. Our platform offers you comprehensive tools and resources to manage your taxes with ease. Whether you're a business owner or an individual, our user-friendly interface and expert support make tax management straightforward and stress-free. Join us today and experience the convenience of our cutting-edge tax solutions.</p>
                        <div className='w-100 mt-3'>
                            <Link to={'/'}>
                                <Button className='btn-blue btn-lg btn-big'><IoMdHome /> GO TO HOME</Button>
                            </Link>
                        </div>
                    </div>

                    <div className='col-md-4'>
                        <div className="loginBox">
                            <div className='logo text-center'>
                                <img src={logo} width="250px" alt='logo' />
                                <h5 className='font-weight-bold mt-4'>Register to new Consultant's account</h5>
                            </div>

                            <div className='wrapper mt-3 card border'>
                            <form onSubmit={handleSubmit}>
    <div className={`form-group ${inputIndex === 0 && 'focus'}`}>
        <span className='icon'><FaUserCircle /></span>
        <input
            type='text'
            className='form-control'
            placeholder='Enter your name'
            onFocus={() => focusInput(0)}
            onBlur={() => setInputIndex(null)}
            autoFocus
            value={name}
            onChange={handleNameChange}
        />
    </div>
    
    <div className={`form-group ${inputIndex === 7.1 && 'focus'}`}>
        <span className='icon'><IoMdPerson /></span>
        <input
            type='text'
            className={`form-control ${isInvalidAge ? 'invalid' : ''}`}
            placeholder='Enter your age'
            value={age}
            onChange={handleAgeChange}
            onFocus={() => focusInput(7.1)}
            onBlur={() => setInputIndex(null)}
        />
        {isInvalidAge && (
            <div style={{ color: 'red', fontSize: '0.75rem' }}>
                Age should be between 18 and 60 years.
            </div>
        )}
    </div>
    
    <div className={`form-group ${inputIndex === 2.1 && 'focus'}`}>
        <span className='icon'><MdOutlineGroups2 size={22} /></span>
        <select
            className='form-control'
            value={gender}
            onChange={handleGenderChange}
            onFocus={() => focusInput(2.1)}
            onBlur={() => setInputIndex(null)}
        >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
        </select>
    </div>

    <div className={`form-group ${inputIndex === 2 && 'focus'}`}>
        <span className='icon'><FaCity /></span>
        <select
            className='form-control'
            value={country}
            onChange={handleCountryChange}
            onFocus={() => focusInput(2)}
            onBlur={() => setInputIndex(null)}
        >
            <option value='' disabled>Select your country</option>
            <option value='Pak'>Pakistan</option>
            <option value='Canada'>Canada</option>
            <option value='UK'>UK</option>
            <option value='Australia'>Australia</option>
            <option value='India'>India</option>
        </select>
    </div>

    <div className={`form-group ${inputIndex === 3 && 'focus'}`}>
        <span className='icon'><MdWork /></span>
        <input
            type='text'
            className='form-control'
            placeholder='Experience in years'
            value={experience}
            onChange={handleExperienceChange}
            onFocus={() => focusInput(3)}
            onBlur={() => setInputIndex(null)}
        />
        {isInvalidExperience && (
            <div style={{ color: 'red', fontSize: '0.75rem' }}>
                Experience should not be less than 2 years.
            </div>
        )}
    </div>

    <div className={`form-group ${inputIndex === 4 && 'focus'}`}>
        <span className='icon'><FaBusinessTime /></span>
        <select
            className='form-control'
            value={chargeMode}
            onChange={handleChargeModeChange}
            onFocus={() => focusInput(4)}
            onBlur={() => setInputIndex(null)}
        >
            <option value="">Select Charge Mode</option>
            <option value="Hourly">Hourly</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
        </select>
    </div>

    <div className={`form-group ${inputIndex === 5 && 'focus'}`}>
        <span className='icon'><IoMdPerson /></span>
        <select
            className='form-control'
            value={timeSlot}
            onChange={handleTimeSlotChange}
            onFocus={() => focusInput(5)}
            onBlur={() => setInputIndex(null)}
        >
            <option value="">Select Time Slot</option>
            <option value="Morning">Morning</option>
            <option value="Afternoon">Afternoon</option>
            <option value="Evening">Evening</option>
        </select>
    </div>

    <div className={`form-group ${inputIndex === 6 && 'focus'}`}>
        <span className='icon'><MdWork /></span>
        <select
            className='form-control'
         
            value={services}
            onChange={handleServiceChange}
            onFocus={() => focusInput(6)}
            onBlur={() => setInputIndex(null)}
        >
            <option value='' disabled>Select Services</option>
            <option value="Consulting">Consulting</option>
            <option value="Tax Planning">Tax Planning</option>
            <option value="Filing">Filing</option>
        </select>
    </div>

    <div className={`form-group ${inputIndex === 7 && 'focus'}`}>
        <span className='icon'><MdEmail /></span>
        <input
            type='email'
            className={`form-control ${!isValid ? 'invalid' : ''}`}
            placeholder='Enter your email'
            value={email}
            onChange={handleEmailChange}
            onFocus={() => focusInput(7)}
            onBlur={handleBlur}
        />
        {!isValid && (
            <div style={{ color: 'red', fontSize: '0.75rem' }}>
                Please enter a valid email address.
            </div>
        )}
    </div>

    <div className={`form-group ${inputIndex === 8 && 'focus'}`}>
        <span className='icon'><RiLockPasswordFill /></span>
        <input
            type={isShowPassword ? 'text' : 'password'}
            className='form-control'
            placeholder='Enter your password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onFocus={() => focusInput(8)}
            onBlur={() => setInputIndex(null)}
        />
        <span className='showPassword' onClick={() => setIsShowPassword(!isShowPassword)}>
            {isShowPassword ? <IoEyeOff /> : <IoEye />}
        </span>
    </div>

    <div className={`form-group ${inputIndex === 9 && 'focus'}`}>
        <span className='icon'><RiLockPasswordFill /></span>
        <input
            type={isShowConfirmPassword ? 'text' : 'password'}
            className='form-control'
            placeholder='Confirm your password'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            onFocus={() => focusInput(9)}
            onBlur={() => setInputIndex(null)}
        />
        <span className='showPassword' onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}>
            {isShowConfirmPassword ? <IoEyeOff /> : <IoEye />}
        </span>
        {!passwordsMatch && (
            <div style={{ color: 'red', fontSize: '0.75rem' }}>
               Password donot match 
            </div>
        )}
    </div>
<center><Button type='submit' className='btn-blue btn-lg btn-block mt-3'>Register</Button>
<p>Already have an Account <Link to='/Consultantlog'>Login</Link></p></center>
    
</form>

                              
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default ConsultantRegistration;
