
import React, { useContext, useState } from "react";
import toast from 'react-hot-toast'
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";

const Register = () => {
  const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);

  const [error, setError] = useState("");

  const [accepted, setAccepted] = useState(false);


  const handleAccepted = event =>{
    setAccepted(event.target.checked)
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;

    console.log(name, email, password, photoURL);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        handleUpdateUserProfile(name, photoURL)
        handleEmailVarification()
        toast.success('Please Verify your email')


        form.reset();
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });

  };
    
  
  const handleUpdateUserProfile = (name, photoURL)=>{
    
    const profile = {
      displayName: name,
      photoURL: photoURL

    }
    updateUserProfile(profile)
    .then(()=>{})
    .catch(e => console.error(e))
  }

  const handleEmailVarification =()=>{
    verifyEmail()
    .then(()=>{})
    .catch(e => console.error(e))

     
  }



  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Your Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPhotoURL">
          <Form.Label>Photo URL</Form.Label>
          <Form.Control type="text" name="photoURL" placeholder="Photo URL" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            placeholder="Your email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            onClick={handleAccepted}
            label={
              <>
                Accept <Link to="/terms">terms and Conditions</Link>
              </>
            }
          />
        </Form.Group>
        <Button variant="primary" type="submit" disabled={!accepted}>
          Register
        </Button>
        <Form.Text className="text-danger">{error}</Form.Text>
      </Form>
    </div>
  );
};

export default Register;
