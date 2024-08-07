import { useContext, useEffect, useState } from 'react';
import logo from '../../assets/images/logo.jpg';
import background from '../../assets/images/background.avif';
import { MyContext } from '../../App';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import '../../App.css'; 
import Button from '@mui/material/Button';
import { Link ,useNavigate} from 'react-router-dom';
import { FaUserCircle } from "react-icons/fa";
import { IoShieldCheckmark } from "react-icons/io5";
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { IoMdHome } from "react-icons/io";
import { MdOutlineGroups2 } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import axios from 'axios';

const ClientRegistration = () => {
    const [name,setName]=useState('');
    const [contact,setContact]=useState('');
    const [gender, setGender] = useState('');
    const [profession, setProfession] = useState('');
    const [age, setAge] = useState('');
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [isInvalidAge, setIsInvalidAge] = useState(false);
    const [inputIndex, setInputIndex] = useState(null);
    const [isShowPassword,setisShowPassword] =useState(false);
    const [isShowConfirmPassword,setisShowConfirmPassword] = useState(false);
    const context = useContext(MyContext)
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const passwordsMatch = password === confirmPassword;
    const navigate=useNavigate();

    useEffect(()=>{
        context.setisHideSidebarAndHeader(true);
        window.scrollTo(0,0);
    },[]);

    const focusInput = (index) => {
        setInputIndex(index);
    }

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };
    const handleContactChange = (event) => {
        setContact(event.target.value);
    };
    const handleNameChange = (event) => {
        setName(event.target.value);
    };


    const handleProfessionChange = (event) => {
        setProfession(event.target.value);
    };

    const handleAgeChange = (event) => {
        const value = event.target.value;
        setAge(value);
        const numericValue = Number(value);
        if (numericValue < 18 || numericValue > 100) {
            setIsInvalidAge(true);
        } else {
            setIsInvalidAge(false);
        }
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
    const validateContactNumber = (number) => {
        const contactNumberRegex = /^[0-9]{11}$/;
        return contactNumberRegex.test(number);
      };
    const handleSubmit = async (e) => {
    
        try {
          const response = await axios.post('http://localhost:3900/api/clients/signup', {
            name, 
            gender,
            profession,
            age,
            email,
            contact,
            password
          });
          alert(response.data.message);
         
        } catch (error) {
          console.error('There was an error!', error);
        }
      };

    return(

        
        <>
            <style>
                {`
                    .signUpSection .loginBox{background: white !important;}
                    .signUpSection .loginBox .wrapper {border: 0px !important; background: white !important;}
                    .loginSection .row .part1{margin-top: 300px !important;}
                `}
            </style>

            <img src={background} className='loginBackground'/>
            <section className="loginSection signUpSection">
                    <div className='row'>
                        <div className='col-md-8 d-flex align-items-center flex-column part1'>
                        <h1>WELCOME TO<span className='text-sky'> SCIT-FORTE</span>, YOUR TRUSTED PLATFORM FOR SEAMLESS TAX SERVICES.</h1>
                        <p>Effortless Tax Solutions Anytime, Anywhere. Our platform offers you comprehensive tools and resources to manage your taxes with ease. Whether you're a business owner or an individual, our user-friendly interface and expert support make tax management straightforward and stress-free. Join us today and experience the convenience of our cutting-edge tax solutions.</p>


                            <div className='w-100 mt-3'>
                                <Link to={'/'} >
                                    <Button className='btn-blue btn-lg btn-big'><IoMdHome/>GO TO HOME</Button>
                                </Link>
                            </div>
                            
                    </div>

                        <div className='col-md-4'>

                        <div className="loginBox">
                            <div className='logo text-center' >
                                <img src={logo} width="250px"/>
                                <h5 className='font-weight-bold mt-1'>Register new client's account</h5>
                            </div>

                        <div className='wrapper mt-0 card border'>
                            <form onSubmit={handleSubmit}>

                                <div className={`form-group position-relative ${inputIndex===0 && 'focus'}`}>
                                    <span className='icon'><FaUserCircle/></span>
                                    <input type='text' className='form-control' placeholder='enter your name' onFocus={()=>focusInput(0)} onBlur={()=>setInputIndex(null)} autoFocus
                                        value={name} onChange={handleNameChange}
                                    />
                                </div>

                                <div className={`form-group position-relative ${inputIndex === 7.1 && 'focus'}`}>
                                    <span className='icon'><IoMdPerson /></span>
                                    <input 
                                        type='text' 
                                        className={`form-control ${isInvalidAge ? 'invalid' : ''}`} 
                                        placeholder='Enter your age' 
                                        value={age} 
                                        onChange={handleAgeChange} 
                                        onFocus={() => focusInput(7.1)} 
                                        onBlur={() => setInputIndex(null)} 
                                        style={{ paddingLeft: '40px' }} // Adjust padding to accommodate icon
                                    />
                                    {isInvalidAge && (
                                        <div style={{ color: 'red', fontSize: '0.75rem' }}>
                                            Age should be between 18 and 100 years.
                                        </div>
                                    )}
                                </div>

                                <div className={`form-group position-relative ${inputIndex === 2.1 ? 'focus' : ''}`}>
                                    <span className='icon' style={{ position: 'absolute', top: '2px', left: '10px' }}>
                                        <MdOutlineGroups2 size={22} />
                                    </span>
                                    <select 
                                        className='form-control' 
                                        value={gender} 
                                        onChange={handleGenderChange} 
                                        onFocus={() => focusInput(2.1)} 
                                        onBlur={() => setInputIndex(null)} 
                                        style={{ paddingLeft: '40px' }} // Adjust padding to accommodate icon
                                    >
                                        <option value='' disabled>Gender</option>
                                        <option value='M'>Male</option>
                                        <option value='F'>Female</option>
                                        
                                    </select>
                                </div>

                                <div className={`form-group position-relative ${inputIndex === 2 ? 'focus' : ''}`}>
                                    <span className='icon' style={{ position: 'absolute', top: '2px', left: '10px' }}>
                                        <MdWork size={22} />
                                    </span>
                                    <select 
                                        className='form-control' 
                                        value={profession} 
                                        onChange={handleProfessionChange} 
                                        onFocus={() => focusInput(2)} 
                                        onBlur={() => setInputIndex(null)} 
                                        style={{ paddingLeft: '40px' }} // Adjust padding to accommodate icon
                                    >
                                        <option value='' disabled>profession</option>
                    
                                        <option value='Doctor'>Doctor</option>
                                        <option value='Teacher'>Teacher</option>
                                        <option value='Engineer'>Engineer</option>
                                        <option value='Lawyer'>Lawyer</option>
                                        <option value='Nurse'>Nurse</option>
                                        <option value='Chef'>Chef</option>
                                        <option value='Artist'>Artist</option>
                                        <option value='Pilot'>Pilot</option>
                                        <option value='Accountant'>Accountant</option>
                                        <option value='Scientist'>Scientist</option>
                                        <option value='Police officer'>Police officer</option>
                                        <option value='Firefighter'>Firefighter</option>
                                        <option value='Architect'>Architect</option>
                                        <option value='Psychologist'>Psychologist</option>
                                        <option value='Musician'>Musician</option>
                                        <option value='Writer'>Writer</option>
                                        <option value='Electrician'>Electrician</option>
                                        <option value='Plumber'>Plumber</option>
                                        <option value='Farmer'>Farmer</option>
                                        <option value='Veterinarian'>Veterinarian</option>
                                        <option value='Actor'>Actor</option>
                                        <option value='Programmer'>Programmer</option>
                                        <option value='Carpenter'>Carpenter</option>
                                        <option value='Librarian'>Librarian</option>
                                        <option value='Dentist'>Dentist</option>
                                        <option value='Real estate agent'>Real estate agent</option>
                                        <option value='Graphic designer'>Graphic designer</option>
                                        <option value='Social worker'>Social worker</option>
                                        <option value='Photographer'>Photographer</option>
                                        <option value='Entrepreneur'>Entrepreneur</option>
                                        <option value='Data scientist'>Data scientist</option>
                                        <option value='Software developer'>Software developer</option>
                                        <option value='UX/UI designer'>UX/UI designer</option>
                                        <option value='Digital marketer'>Digital marketer</option>
                                        <option value='Content creator'>Content creator (e.g., YouTuber, influencer)</option>
                                        <option value='Blockchain developer'>Blockchain developer</option>
                                        <option value='Cybersecurity analyst'>Cybersecurity analyst</option>
                                        <option value='AI/machine learning engineer'>AI/machine learning engineer</option>
                                        <option value='Social media manager'>Social media manager</option>
                                        <option value='Environmental consultant'>Environmental consultant</option>
                                        <option value='Virtual reality developer'>Virtual reality developer</option>
                                        <option value='Drone pilot'>Drone pilot</option>
                                        <option value='Sustainability consultant'>Sustainability consultant</option>
                                        <option value='E-commerce specialist'>E-commerce specialist</option>
                                        <option value='Genetic counselor'>Genetic counselor</option>
                                        <option value='Bioinformatician'>Bioinformatician</option>
                                        <option value='UX researcher'>UX researcher</option>
                                        <option value='App developer'>App developer</option>
                                        <option value='Cryptocurrency analyst'>Cryptocurrency analyst</option>
                                        <option value='SEO specialist'>SEO specialist</option>
                                        <option value='Cloud computing engineer'>Cloud computing engineer</option>
                                        <option value='Financial analyst'>Financial analyst (specializing in fintech)</option>
                                        <option value='Biomedical engineer'>Biomedical engineer</option>
                                        <option value='Augmented reality designer'>Augmented reality designer</option>
                                        <option value='Robotics engineer'>Robotics engineer</option>
                                        <option value='Drone technician'>Drone technician</option>
                                        <option value='3D printing specialist'>3D printing specialist</option>
                                        <option value='Virtual assistant'>Virtual assistant (remote work)</option>
                                        <option value='Renewable energy engineer'>Renewable energy engineer</option>
                                        <option value='Quantum computing researcher'>Quantum computing researcher</option>

                                    </select>
                                </div>

                                <div className={`form-group position-relative ${inputIndex===11 && 'focus'}`}>
                                    <span className='icon'style={{ position: 'absolute', top: '2px', left: '10px' , paddingRight: '40px'}} >
                                        <FaPhoneAlt size={22}/>
                                    </span>
                                    <input type='text' className='form-control' placeholder='Contact Number' onFocus={()=>focusInput(11)} onBlur={()=>setInputIndex(null)}
                                        value={contact} onChange={handleContactChange}
                                    />
                                     {!validateContactNumber && (
                                        <div className='invalid-feedback'>
                                            Enter valid contact number
                                        </div>
                                    )}
                                </div>

                                <div className={`form-group position-relative ${inputIndex === 7 && 'focus'}`}>
                                    <span className='icon'><MdEmail/></span>
                                    <input
                                        type='text'
                                        className={`form-control ${!isValid && 'is-invalid'}`}
                                        placeholder='Enter your email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onFocus={() => setInputIndex(7)}
                                        onBlur={handleBlur}
                                    />
                                    {!isValid && (
                                        <div className='invalid-feedback'>
                                            Enter a valid email address
                                        </div>
                                    )}
                                </div>

                                <div>
                                    <div className={`form-group position-relative ${inputIndex === 8 ? 'focus' : ''}`}>
                                        <span className='icon'><RiLockPasswordFill /></span>
                                        <input
                                            type={isShowPassword ? 'text' : 'password'}
                                            className='form-control'
                                            placeholder='enter your password'
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            onFocus={() => setInputIndex(8)}
                                            onBlur={() => setInputIndex(null)}
                                        />
                                        <span className='toggleShowPassword' onClick={() => setisShowPassword(!isShowPassword)}>
                                            {isShowPassword ? <IoEyeOff /> : <IoEye />}
                                        </span>
                                    </div>

                                    <div className={`form-group position-relative ${inputIndex === 9 ? 'focus' : ''}`}>
                                        <span className='icon'><IoShieldCheckmark /></span>
                                        <input
                                            type={isShowConfirmPassword ? 'text' : 'password'}
                                            className='form-control'
                                            placeholder='confirm your password'
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            onFocus={() => setInputIndex(9)}
                                            onBlur={() => setInputIndex(null)}
                                        />
                                        <span className='toggleShowPassword' onClick={() => setisShowConfirmPassword(!isShowConfirmPassword)}>
                                            {isShowConfirmPassword ? <IoEyeOff /> : <IoEye />}
                                        </span>
                                    </div>

                                    {!passwordsMatch && (
                                        <div style={{ color: 'red', marginTop: '10px' }}>
                                            Passwords do not match
                                        </div>
                                    )}
                                </div>


                                <FormControlLabel required control={<Checkbox />} label="I agree to all terms and conditions" />

                                <div className='form-group'>
                                    <Button className="btn-blue btn-lg w-100 btn-big" type='submit' onSubmit={handleSubmit}>SIGN UP</Button>
                                </div>
                                
                                
                            </form>

                            <span className='text-center d-block mt-3'>
                                Already have an account ? 
                                <Link to={'/ClientLog'} className='link color ml-2'>Login</Link>
                            </span>
                        </div>                     
                    </div>
                    </div>
                </div> 
            </section>
        </>
    )
}

export default ClientRegistration;