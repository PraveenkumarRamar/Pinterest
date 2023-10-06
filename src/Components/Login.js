import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pinterest from '../Components/pinterest.png'
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate,Link } from 'react-router-dom';
import { API } from './global';

function Login() {
let nav = useNavigate()
    let handleLogin = async (e) => {
        e.preventDefault()
        let data = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        // console.log(data)
        try {
            let res = await axios.post(`${API}/signin`, data)
            console.log(res)
            if (res.status === 200) {
                sessionStorage.setItem('token', res.data.token)
                toast.success(res.data.message)
                nav('/home')
            }
        } catch (error) {
            toast.error(error.response.data.message);
            // nav('/dashboard')
        }
    }
    return <>
        <div className='signup-card' style={{ "backgroundImage": `url("https://i.pinimg.com/474x/eb/e4/cd/ebe4cd1ad18399b8c653e96d0fbcb2f3.jpg")`, "height": "38rem" }}>
            <Card className="text-center" style={{ "width": "30rem", "marginLeft": "30%", "opacity": "0.8", "borderRadius": "35px" }}>
                <img src={pinterest} style={{ "width": "4rem", "marginLeft": "47%", "marginTop": "1.5rem" }} alt="" />
                <h2 style={{ "marginTop": "1.5rem" }}>Welcome to Pinterest </h2>
                <h6>Find new ideas to try</h6>
                <Card.Body>
                    <div style={{ "textAlign": "left", "marginLeft": "5.5rem" }} >
                        <Form onSubmit={handleLogin} >
                            <Form.Group className="mb-3" >
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control type="email" placeholder="Enter your email" name='email' />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" name='password' />
                            </Form.Group>
                            <Link to='/reset-pass' ><p>Forget your password?</p></Link>

                            <Button variant="primary" type="submit" style={{ "width": "16rem", "margin": "1rem", "borderRadius": "50px", "cursor": "pointer" }}>
                                Login
                            </Button>
                            <Button variant="primary" type="submit" style={{ "width": "10rem", "margin": "1rem", "borderRadius": "50px", "cursor": "pointer","marginLeft":"4rem" }} onClick={()=>nav('/dashboard')} >
                                Back
                            </Button>
                        </Form>
                    </div>
                </Card.Body>
            </Card>
        </div>
    </>
}

export default Login