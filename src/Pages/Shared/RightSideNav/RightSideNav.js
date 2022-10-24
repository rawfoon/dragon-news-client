import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { ListGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import {FaGoogle, FaGithub, FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp, FaTwitch}  from "react-icons/fa"
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import BrandCarousel from '../BrandCarousel/BrandCarousel';

const RightSideNav = () => {


    const {providerLogin} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const handleGoogleSignIn = ()=>{
        providerLogin(googleProvider)
        .then(result => {
            const user = result.user
            console.log(user)
            navigate(from, {replace: true})
        })
        .catch(error => console.error(error))

    }

    return (
        <div>
            <ButtonGroup vertical>
              <Button onClick={handleGoogleSignIn} className='mb-2' variant='outline-primary'><FaGoogle/> Login with Google</Button>
              <Button variant='outline-dark'><FaGithub/> Login with Github</Button>
       
            </ButtonGroup>
             <div className='mt-4'>
                <h5>Find us on</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-3'><FaFacebook/> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitch/> Twich</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaWhatsapp/> Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaLinkedin/> Linkedin</ListGroup.Item>
                </ListGroup>

            </div>
            <div>
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;