import { useContext, useEffect } from 'react';
import logo from '../../assets/images/logo.jpg';
import background from '../../assets/images/background.avif';
import { MyContext } from '../../App';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const MainLoginPage = () => {
    const context = useContext(MyContext);
    const navigate = useNavigate();

    useEffect(() => {
        context.setisHideSidebarAndHeader(true);
    }, [context]);

    return (
        <>
            <style>
                {`
                .loginBackgroundWrapper {
                    position: relative;
                    width: 100%;
                    height: auto;
                }

                .loginBackground {
                    width: 100%;
                    height: auto;
                    opacity: 0.1; 
                }
                
                .overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(255, 255, 255, 0.5); 
                }

                .logoImage {
                    width: 250px;
                    height: auto;
                }
                
                .portalIcon {
                    width: 90px;
                }
                
                .loginSection .loginBox {
                    width: 500px;
                }

                .loginSection .loginBox .wrapper { 
                    background: #fff !important; 
                }

                .loginBox, .wrapper {
                    background-color: white;
                    border: 1px solid grey;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    padding: 25px;
                    border-radius: 5px;
                    border: none;
                }

                .portalItem {
                    display: flex;
                    align-items: center;
                    margin-bottom: 5px;
                }

                .portalButton {
                    flex: 1;
                    border: none;
                    margin-bottom: 2px;
                }
                `}
            </style>
            <div className="loginBackgroundWrapper">
                <img src={background} className='loginBackground' alt="background"/>
                <div className="overlay"></div>
            </div>
            <section className="loginSection">
                <div className="loginBox align-items-center justify-content-center mb-0 mt-5">
                    <div className='wrapper mt-3 card border'>
                        <form>
                            <div className='logo text-center'>
                                <img src={logo} className='logoImage' alt="logo"/>
                                <h5 className='font-weight-bold mb-3 mt-3'>Tax Management System</h5>
                            </div>
                            <div className='form-group mb-0 mt-1'>
                                <div className='portalItem'>
                                    <img src='https://majuonline.edu.pk/Images/teacher.png' className='portalIcon' alt="Admin Portal"/> 
                                    <Button 
                                        variant="outlined" 
                                        className='portalButton btn-lg btn-big font-weight-bold' 
                                        style={{ color: 'black' }}
                                        onClick={() => navigate('/signup')}
                                    >
                                        ADMIN PORTAL
                                    </Button>
                                </div>
                                <div className='portalItem'>
                                    <img src='https://majuonline.edu.pk/Images/student.png' className='portalIcon' alt="Consultant Portal"/> 
                                    <Button 
                                        variant="outlined" 
                                        className='portalButton btn-lg btn-big' 
                                        style={{ color: 'black' }}
                                        onClick={() => navigate('/consultantRegistration')}
                                    >
                                        CONSULTANT PORTAL
                                    </Button>
                                </div>
                                <div className='portalItem'>
                                    <img src="https://majuonline.edu.pk/Images/admin.png" className='portalIcon' alt="Client Portal"/> 
                                    <Button 
                                        variant="outlined" 
                                        className='portalButton btn-lg btn-big' 
                                        style={{ color: 'black' }}
                                        onClick={() => navigate('/ClientReg')}
                                    >
                                        CLIENT PORTAL
                                    </Button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}

export default MainLoginPage;
