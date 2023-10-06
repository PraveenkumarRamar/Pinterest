import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pinterest from '../Components/pinterest.png'
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Login() {
let nav = useNavigate()
    let changePass = async (e) => {
        e.preventDefault()
        let data = {
            email: e.target.email.value,
            old_password: e.target.old_password.value,
            new_password:e.target.new_password.value
        }
        // console.log(data)
        try {
            let res = await axios.post(`${process.env.REACT_APP_API_URL}/reset-pass`, data)
            // console.log(res)
            if (res.status == 200) {
                toast.success(res.data.message)
                nav('/login')
            }
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
    return <>
        <div className='signup-card' style={{ "backgroundImage": `url("https://i.pinimg.com/474x/eb/e4/cd/ebe4cd1ad18399b8c653e96d0fbcb2f3.jpg")`, "height": "36rem" }}>
            <Card className="text-center" style={{ "width": "30rem", "marginLeft": "30%", "opacity": "0.8", "borderRadius": "35px" }}>
                <img src={pinterest} style={{ "width": "4rem", "marginLeft": "47%", "marginTop": "1.5rem" }} alt="" />
                <h2 style={{ "marginTop": "1.5rem" }}>Forgot Password </h2>
                <Card.Body>
                    <div style={{ "textAlign": "left", "marginLeft": "5.5rem" }} >
                        <Form onSubmit={changePass} >
                        <Form.Group className="mb-3" >
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" name='email' />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Old-Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter your old password" name='old_password' />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>New Password</Form.Label>
                                <Form.Control type="password" placeholder="Enter new Password" name='new_password' />
                            </Form.Group>

                            <Button variant="primary" type="submit" style={{ "width": "16rem", "margin": "1rem", "borderRadius": "50px", "cursor": "pointer" }}>
                            Change Password
                            </Button>
                        </Form>
                    </div>
                </Card.Body>
            </Card>
        </div>
    </>
}

export default Login