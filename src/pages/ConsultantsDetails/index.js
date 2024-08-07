import React from "react";
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import { emphasize, styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Slider from "react-slick";
import admin from '../../assets/images/admin.png'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import Rating from '@mui/material/Rating';
import Button from '@mui/material/Button';
import { FaReply } from "react-icons/fa";


const consultantsSliderOptions = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
};

const consultantsSliderSmlOptions = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  arrows: false
};

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor =
    theme.palette.mode === 'light'
      ? theme.palette.grey[100]
      : theme.palette.grey[800];

  return {
    backgroundColor,
    height: theme.spacing(3),
    color: theme.palette.text.primary,
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
});

const ConsultantDetails = () => {
  return (
    <>
      <div className="right-content w-100">
        <div className="card shadow border-0 w-100 flex-row p-4">
          <h5 className="mb-0">Consultant's Profile</h5>
          <Breadcrumbs aria-label="breadcrumb" className="ml-auto breadcrumbs_">
            <StyledBreadcrumb
              component="a"
              href="#"
              label="Dashboard"
              icon={<HomeIcon fontSize="small" />}
            />
            <StyledBreadcrumb
              component="a"
              href="#"
              label="Consultants"
              deleteIcon={<ExpandMoreIcon />}
            />
            <StyledBreadcrumb
              label="Consultant's profile"
              deleteIcon={<ExpandMoreIcon />}
            />
          </Breadcrumbs>
        </div>

        <div className='card consultantsDetailsSection'>
          <div className='row'>

            <div className='col-md-5'>
              <div className="sliderWrapper pt-3 pb-3 pl-4 pr-4">
                <h6 className="mb-4">Consultants Bio</h6>
              <Slider {...consultantsSliderOptions} className="sliderBig mb-2">
                <div className='item'>
                  <img src="https://cdn.pixabay.com/photo/2015/03/04/22/35/avatar-659652_640.png" className='w-100'/>
                </div>
              </Slider>
              
              <Slider {...consultantsSliderSmlOptions} className="sliderSml">
                <div className='item'>
                  <img src="https://cdn.pixabay.com/photo/2014/03/25/16/54/user-297566_640.png" className='w-100'/>
                </div>
                <div className='item'>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSppkoKsaYMuIoNLDH7O8ePOacLPG1mKXtEng&s" className='w-100'/>
                </div>
                <div className='item'>
                  <img src="https://e7.pngegg.com/pngimages/550/997/png-clipart-user-icon-foreigners-avatar-child-face.png" className='w-100'/>
                </div>
                <div className='item'>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgnq9pVEA16U0vH0nT0UeFY9vrTn99Za2a7QWub_dBpXSYTCZtBQULWaaRJ4ENFreEmPc&usqp=CAU" className='w-100'/>
                </div>
                <div className='item'>
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKVgdPnMdBjCdxkKFnwvfzcvEA6RTfYRMuEA&s" className='w-100'/>
                </div>
                <div className='item'>
                  <img src="https://st3.depositphotos.com/15648834/17930/v/450/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" className='w-100'/>
                </div>
              </Slider>
              </div>
            </div>


            <div className='col-md-7 '>
              <div className="pt-3 pb-3 pl-4 pr-4">
                <h6 className="mb-4">Consultants details</h6> 
                <h6 >Hi! I am <b>Consultants Name</b> specializes in tax systems, providing expert tax consultancy services. delivering personalized solutions for businesses and individuals.</h6>

                <div className="consultantInfo mt-3">
                  <div className="row mb-2">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon"></span>
                      <span className="name">Name</span>
                    </div>

                    <div className="col-sm-7">
                    :  <span>Alishba Awan</span>
                    </div>

                  </div>

                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon"></span>
                      <span className="name">Gender</span>
                    </div>

                    <div className="col-sm-7">
                    :  <span>Male</span>
                    </div>

                  </div>

                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon"></span>
                      <span className="name">Age</span>
                    </div>

                    <div className="col-sm-7">
                    :  <span>22</span>
                    </div>

                  </div>

                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon"></span>
                      <span className="name">Qualifications</span>
                    </div>

                    <div className="col-sm-7">
                    : <span>
                        < ul className="list list-inline tags sml">
                        <li className="list-inline-item"><span>School</span></li>
                        <li className="list-inline-item"><span>College</span></li>
                        <li className="list-inline-item"><span>Uni</span></li>
                        <li className="list-inline-item"><span>Masters</span></li>
                       

                        </ul>
                      </span>
                    </div>

                  </div>

                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon"></span>
                      <span className="name">Services</span>
                    </div>

                    <div className="col-sm-7">
                    :  <span>
                    < ul className="list list-inline tags sml">
                        <li className="list-inline-item"><span>Service 1</span></li>
                        <li className="list-inline-item"><span>Service 2</span></li>
                       

                        </ul>
                    </span>
                    </div>

                  </div>

                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon"></span>
                      <span className="name">Specialities</span>
                    </div>

                    <div className="col-sm-7">
                    :  <span>
                    < ul className="list list-inline tags sml">
                        <li className="list-inline-item"><span>Field 1</span></li>
                        <li className="list-inline-item"><span>Field 2</span></li>
                        <li className="list-inline-item"><span>Field 3</span></li>
                        <li className="list-inline-item"><span>Field 4</span></li>
                       

                        </ul>
                    </span>
                    </div>

                  </div>

                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon"></span>
                      <span className="name">Prices</span>
                    </div>

                    <div className="col-sm-7">
                    :  <span>$799-$999</span>
                    </div>

                  </div>

                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon"></span>
                      <span className="name">Reviews</span>
                    </div>

                    <div className="col-sm-7">
                    :  <span>(05) reviews</span>
                    </div>

                  </div>

                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon"></span>
                      <span className="name">Availabile Dates</span>
                    </div>

                    <div className="col-sm-7">
                    :  <span>
                    < ul className="list list-inline tags sml">
                        <li className="list-inline-item"><span>Date: 01 hr: 2 pm</span></li>
                        <li className="list-inline-item"><span>Date: 02 hr: 1 am</span></li>

                        </ul>
                    </span>
                    </div>

                  </div>

                  <div className="row">
                    <div className="col-sm-3 d-flex align-items-center">
                      <span className="icon"></span>
                      <span className="name">Experience years</span>
                    </div>

                    <div className="col-sm-7">
                    :  <span>10+ years</span>
                    </div>

                  </div>
                </div>
              </div>
                 
            </div>




          </div>

          <div className="p-4">
          <h5 className="mt-4 mb-3">Consultants Description</h5>
          <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>

          <br/>

          <h5 className="mt-4 mb-4">Rating Analytics</h5>

          <div className="ratingSection">
            <div className="ratingRow d-flex align-items-center">
              <span className="col1">
                5 Star
              </span>

              <div className="col2">
              <div className="progress">
                <div className="progress-bar" style={{ width: '70%' }}></div>
              </div>

              
              



              </div>

              <div className="col3">
                (18)
              </div>
            </div>

            <div className="ratingRow d-flex align-items-center">
              <span className="col1">
                4 Star
              </span>

              <div className="col2">
              <div className="progress">
                <div className="progress-bar" style={{ width: '50%' }}></div>
              </div>

              
              



              </div>

              <div className="col3">
                (12)
              </div>
            </div>

            <div className="ratingRow d-flex align-items-center">
              <span className="col1">
                3 Star
              </span>

              <div className="col2">
              <div className="progress">
                <div className="progress-bar" style={{ width: '35%' }}></div>
              </div>

              
              



              </div>

              <div className="col3">
                (8)
              </div>
            </div>

            <div className="ratingRow d-flex align-items-center">
              <span className="col1">
                2 Star
              </span>

              <div className="col2">
              <div className="progress">
                <div className="progress-bar" style={{ width: '20%' }}></div>
              </div>

              
              



              </div>

              <div className="col3">
                (2)
              </div>
            </div>

            <div className="ratingRow d-flex align-items-center">
              <span className="col1">
                1 Star
              </span>

              <div className="col2">
              <div className="progress">
                <div className="progress-bar" style={{ width: '10%' }}></div>
              </div>

              
              



              </div>

              <div className="col3">
                (1)
              </div>
            </div>

            
          </div>

          <br/>

          <h5 className="mt-4 mb-4">Customer review</h5>

          <div className="reviewSection">
            <div className="reviewsRow">
              <div className="row">
                <div className="col-sm-7 d-flex">
                  <div className="d-flex flex-column">
                  <div className="userInfo d-flex">
                                  <div className="userImg align-items-center mb-3">
                                        <span className="rounded-circle">
                                          <img src={admin} lg={true}/>
                                      </span>
                                  </div>

                                  <div className="info pl-2">
                                    <h6>Alishba Malik</h6>
                                    <span>25 minutes ago!</span>
                                  </div>
                    </div>
                    <Rating name="read-only" value={5} readOnly />
                  </div>                    
                </div>

                <div className="col-md-5 d-flex ">
                  <div className="ml-auto ">
                    <Button className="btn-blue btn-big btn-lg ml-3"> <FaReply/> &nbsp;Reply</Button>
                  </div>
                </div>

                <p className="mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p> 
              </div>
            </div>




            <div className="reviewsRow reply">
              <div className="row">
                <div className="col-sm-7 d-flex">
                  <div className="d-flex flex-column">
                  <div className="userInfo d-flex">
                                  <div className="userImg align-items-center mb-3">
                                        <span className="rounded-circle">
                                          <img src={admin} lg={true}/>
                                      </span>
                                  </div>

                                  <div className="info pl-2">
                                    <h6>Alishba Malik</h6>
                                    <span>25 minutes ago!</span>
                                  </div>
                    </div>
                    <Rating name="read-only" value={5} readOnly />
                  </div>                    
                </div>

                <div className="col-md-5 d-flex ">
                  <div className="ml-auto ">
                    <Button className="btn-blue btn-big btn-lg ml-3"> <FaReply/> &nbsp;Reply</Button>
                  </div>
                </div>

                <p className="mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p> 
              </div>
            </div>

            <div className="reviewsRow reply">
              <div className="row">
                <div className="col-sm-7 d-flex">
                  <div className="d-flex flex-column">
                  <div className="userInfo d-flex">
                                  <div className="userImg align-items-center mb-3">
                                        <span className="rounded-circle">
                                          <img src={admin} lg={true}/>
                                      </span>
                                  </div>

                                  <div className="info pl-2">
                                    <h6>Alishba Malik</h6>
                                    <span>25 minutes ago!</span>
                                  </div>
                    </div>
                    <Rating name="read-only" value={5} readOnly />
                  </div>                    
                </div>

                <div className="col-md-5 d-flex ">
                  <div className="ml-auto ">
                    <Button className="btn-blue btn-big btn-lg ml-3"> <FaReply/> &nbsp;Reply</Button>
                  </div>
                </div>

                <p className="mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p> 
              </div>
            </div>

            <div className="reviewsRow">
              <div className="row">
                <div className="col-sm-7 d-flex">
                  <div className="d-flex flex-column">
                  <div className="userInfo d-flex">
                                  <div className="userImg align-items-center mb-3">
                                        <span className="rounded-circle">
                                          <img src={admin} lg={true}/>
                                      </span>
                                  </div>

                                  <div className="info pl-2">
                                    <h6>Alishba Malik</h6>
                                    <span>25 minutes ago!</span>
                                  </div>
                    </div>
                    <Rating name="read-only" value={5} readOnly />
                  </div>                    
                </div>

                <div className="col-md-5 d-flex ">
                  <div className="ml-auto ">
                    <Button className="btn-blue btn-big btn-lg ml-3"> <FaReply/> &nbsp;Reply</Button>
                  </div>
                </div>

                <p className="mt-3">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p> 
              </div>
            </div>



          </div>

          <br/>

          <h5 className="mt-4 mb-4">Review reply form</h5>

          <form className="reviewForm">
            <textarea placeholder="write here ">

            </textarea>
            <button className="btn-blue btn-big btn-lg w-100 mt-3">drop your replies</button>
          </form>




          </div>


          
        </div>


      </div>
    </>
  );
};

export default ConsultantDetails;
