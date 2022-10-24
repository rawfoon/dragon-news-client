import React, { useContext, useRef, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';


const Profile = () => {
  const {user} = useContext(AuthContext)

  const [name, setName] = useState(user?.displayName)

  const photoUrlRef = useRef(user?.photoURL)

  const handleSubmit= event =>{
    event.preventDefault()
    console.log(photoUrlRef.current.value)
  }


  const handleNameChange = event =>{
    setName(event.target.value)

  }
    return (
        <div>
            <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" readOnly defaultValue={user?.email} placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={handleNameChange} type="text" defaultValue={name} placeholder="Your Name" name='name' />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPhotoURL">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control ref={photoUrlRef} type="text" defaultValue={user?.photoURL} placeholder="Photo Url" name='photoURL' />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </div>
    );
};

export default Profile;