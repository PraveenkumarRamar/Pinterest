import React, { useEffect, useState } from 'react'
import pinterest from '../Components/pinterest.png'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { IoNotificationsSharp } from 'react-icons/io5';
import { AiOutlineSearch, AiOutlineMessage } from 'react-icons/ai';
import { MdAccountCircle } from 'react-icons/md';
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
// import { toast } from 'react-toastify';
import useLogut from './hooks/useLogut';
import { Link } from 'react-router-dom';
import { API } from './global';

function Home() {
    let token = sessionStorage.getItem('token')
    let logout = useLogut()
    // let nav = useNavigate()
    let [data, setData] = useState([])

    let getdata = async () => {
        try {
            let datas = await axios.get(`${API}/data`,{
                headers:{
                    authorization:`Bearer ${token}`
                }
            })

            setData(datas.data.data)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getdata()
    })
    return <>
        <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <img src={pinterest} alt="" style={{ "width": "3rem", "cursor": "pointer" }} />
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" >
                        <Nav.Link style={{ "font-size": "1rem", "color": "black","fontWeight":"500" }}>Home</Nav.Link>
                        <Nav.Link style={{ "font-size": "1rem", "color": "black" ,"fontWeight":"500"}}>Explore</Nav.Link>
                        <NavDropdown title="Create" id="basic-nav-dropdown" style={{ "font-size": "1rem","fontWeight":"500", "color": "black" }}>
                            <NavDropdown.Item style={{ "font-size": "1rem", "color": "black","fontWeight":"500" }}>Create Idea Pin</NavDropdown.Item>
                            <NavDropdown.Item style={{ "font-size": "1rem", "color": "black","fontWeight":"500" }}>Create Pin</NavDropdown.Item>
                        </NavDropdown>

                        <input type='search' placeholder='Search your pins' style={{ "border-radius": "50px", "width": "40rem", "paddingLeft": "4rem", "color": "grey" }} />
                        <IoNotificationsSharp style={{ "font-size": "1.5rem", "color": "grey", "margin": "1rem" }} />
                        <AiOutlineMessage style={{ "font-size": "1.5rem", "color": "grey", "margin": "1rem" }} />
                        <MdAccountCircle style={{ "font-size": "1.5rem", "color": "grey", "margin": "1rem" }} />
                        <NavDropdown id="basic-nav-dropdown"  >
                            <div style={{ "font-size": "1rem", "color": "black", "cursor": "pointer","fontWeight":"bold" }} >Add account</div>
                            <div style={{ "font-size": "1rem", "color": "black", "cursor": "pointer","fontWeight":"bold" }} >Convert to business</div>
                            <div style={{ "font-size": "1rem", "color": "black", "cursor": "pointer","fontWeight":"bold" }} >Settings</div>
                            <div style={{ "font-size": "1rem", "color": "black", "cursor": "pointer","fontWeight":"bold" }} onClick={logout}>Logout</div>

                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        <div className='image' style={{ "display": "flex", "flexWrap": "wrap" }} >
            {
                data.map((e, i) => {
                    return <>
                        <img src={`${e.image}`} style={{ "width": "17rem", "padding": "1rem", "borderRadius": "25px" }} alt='' />
                    </>
                })
            }
        </div>

    </>
}

export default Home