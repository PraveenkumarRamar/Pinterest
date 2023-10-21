import React, { useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import pinterest from '../Components/pinterest.png'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import axios from 'axios'
import { toast } from 'react-toastify';
import { API } from './global';
import { Link } from 'react-router-dom';
function Dashboard() {
    let nav = useNavigate()

    // let [email,setEmail] = useState("")
    // let [name, setName] = useState("")
    // let [mobile,setMobile] = useState("")
    // let [pass,setPass] = useState("")

    let handleSignup = async (e) => {
        e.preventDefault()
        let data = {
            email: e.target.email.value,
            name: e.target.name.value,
            mobile: e.target.mobile.value,
            password: e.target.password.value
        }
        // console.log(data)
        try {
            let res = await axios.post(`${API}/signup`, data)
            if (res.status === 200) {
                toast.success(res.data.message)
                nav('/login')
            } 
        }
            catch (error) {
                toast.error(error.response.data.message)
            }
        } 

    return <>
            <div className='main' >
                <Navbar style={{ "position": "sticky" }} >
                    <Container>
                        <img src={pinterest} style={{ "width": "3rem", "cursor": "pointer" }} alt="" />
                        <Navbar.Brand className='nav-title' style={{ "color": "red", "fontWeight": "400" }}>Pinterest</Navbar.Brand>
                        <Nav className="me-auto" style={{ "paddingLeft": "29rem" }}>
                            <a href='https://help.pinterest.com/en/guide/all-about-pinterest' target='blank' className='navlink' style={{ "color": "black", "paddingRight": "1rem", "fontWeight": "500", "textDecoration": "none", "padding": "0.5rem", "margin": "0.5rem", "display": "inline" }} >About</a>
                            <a href='https://business.pinterest.com/en-in/' target='blank' className='navlink' style={{ "color": "black", "paddingRight": "1rem", "fontWeight": "500", "textDecoration": "none", "padding": "0.5rem", "margin": "0.5rem", "display": "inline" }} >Business</a>
                            <a href='https://newsroom.pinterest.com/en' target='blank' className='navlink' style={{ "color": "black", "paddingRight": "1rem", "fontWeight": "500", "textDecoration": "none", "padding": "0.5rem", "margin": "0.5rem", "display": "inline" }} >Blog</a>
                            <Link to='/login' style={{ "color": "black", "backgroundColor": "red", "textDecoration": "none", "borderRadius": "50px", "fontWeight": "500", "padding": "0.5rem", "margin": "0.5rem", "display": "inline" }} >Log-in</Link>
                            <a href='#signup-card' style={{ "color": "black", "backgroundColor": "whitesmoke", "textDecoration": "none", "borderRadius": "50px", "fontWeight": "500", "padding": "0.5rem", "margin": "0.5rem", "display": "inline" }} >Sign-up</a>
                        </Nav>
                    </Container>
                </Navbar>
                <Carousel data-bs-theme="dark"  >
                    <Carousel.Item>
                        <Carousel.Caption>
                            <h1 style={{ "fontSize": "4rem", "color": "white" }} >Get Your next</h1>
                            <p style={{ "color": "white" }} >Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                        <div className='images' style={{ "backgroundImage": `url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBwoHBw0HBwcHBw0HBwcHCA8ICQcKFREWFhURExMYHSggGCYxJxMTITEhMSkrLi4uFx8zODMsNygtLjcBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMEBBQMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAwIBBAf/xAAYEAEBAQEBAAAAAAAAAAAAAAAAAQISEf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD43lXKOVcgrlXKOVcgtlbCGVsUF8VbDz4q2KD0Yq2a8+atmg9GatmvPmq5oPRmrZrzZqudA9Oa3NPPnTc0C/RdI9F0DetJarl0xrQOaqWq7rSeqDG6jqt6qWqCeqjtTVR1QT3UdqbqO6Ce0dK7qOgT0npTSWgYoVwE8q5RypkFsq5RzVM0Fs1bNefNVzQejNWzXnzVc0HpzVc1581XNB6M1XNefNUzoHpzpTOnmzpSaB6JpuaeeaamgX6OkenOgVumLpi6Zugd1pPVcuk9aA1UtV3WktUGdVLVa1UtUGNVHdb1UtUGNVLTeqlqgzpLTeqnqgzXHLQE8qZqMUzQWzVM1HNUzQWzVc1DNUzQejNVzXmzVc0HpzVc15s1XOgejOlc6ebOlJoHomlJp5ppuaB6JpqaeeaamgW6OkejoFbpm6TumboG7pjWmbpPWgd1pPVNaT1oHNVLVd1pPWgZ1UtVrVS1QZ1U9VrVT1QZ1U9VrVT1QZtdZoCbeaw7AWzVM1HNbzQXzW81HNUlBbNUzUJW5QenOlM6ebOlM6B6c6Umnmmm5oHpmmpp55pqaB6Jp3pCad6Bfo6R6OgVumbpPpm6BS6YumLpm6BrWk9acuk9aB3Wk9ac1pPVA1U7XbU7QNVPVdtT1Qc1U9VrVTtBy0cAcABqVSVFuUFpVJUJVJQWlblRlblBaVuaQlblB6Jpuaeeaamgeiaamnnmm5oF5p3pDp3oF+nOkejoFumbpPpm6BW6YumLpi6Bu6Y1pm6YtBq6YtctYtB21O0tYtAtTtdtTtA1WKWuA7AgDgADrgDcrcqTUoLStyoytSgvK1KjK1NAtK1NIytTQLTTU0jNO9At070j0dAt0dI+nQK9OXSfTnQKXTNrHTloNWs2s3TNoNWsWuXTNoO2sWuWsWg7anaWuAAA7AgDgAAAAANStypOygtNNTSMrUoLStTSMrs0C0070l070CvTvSXR0CvR0l0dAr050n050Cl05dJ9OXQN3TN0zdM3QNWs2s2s2g7azaOAAAAA7AgDgAAAAAAADsrgDcrsqboKdO9Jeu+gr070l0dAr0dJdHQKdHSfrnoKdOXTHrnoNXTlrIDrgAAAAAAA7AgDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOwIA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADsCAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7AgDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOwIA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADsAB//Z")` }} >
                            {/* <img
                        style={{ "width": "20rem", "height": "30rem" }}
                        className="d-block w-100"
                        src="https://i.pinimg.com/474x/b1/86/dd/b186ddfdf94dc7da1a5df3a4ac4b8835.jpg"
                        alt="First slide"
                    /> */}
                            <img style={{ "height": "35rem", "padding": "0.5rem" }} src="https://i.pinimg.com/474x/b1/86/dd/b186ddfdf94dc7da1a5df3a4ac4b8835.jpg" alt="" />
                            <img style={{ "height": "30rem", "padding": "0.5rem" }} src="https://i.pinimg.com/474x/c6/00/8a/c6008a2877a35735a3a86fab9f961b2b.jpg" alt="" />
                            <img style={{ "height": "25rem", "padding": "0.5rem" }} src="https://i.pinimg.com/474x/7a/0c/4f/7a0c4f1252566c1f1ae76d035de6ce7b.jpg" alt="" />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption>
                            <h1 style={{ "fontSize": "4rem", "color": "white" }}>Get Your next</h1>
                            <p style={{ "color": "white" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                        <div className='images' style={{ "backgroundImage": `url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBwoHBw0HBwcHBw0HBwcHCA8ICQcKFREWFhURExMYHSggGCYxJxMTITEhMSkrLi4uFx8zODMsNygtLjcBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMEBBQMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAwIBBAf/xAAYEAEBAQEBAAAAAAAAAAAAAAAAAQISEf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD43lXKOVcgrlXKOVcgtlbCGVsUF8VbDz4q2KD0Yq2a8+atmg9GatmvPmq5oPRmrZrzZqudA9Oa3NPPnTc0C/RdI9F0DetJarl0xrQOaqWq7rSeqDG6jqt6qWqCeqjtTVR1QT3UdqbqO6Ce0dK7qOgT0npTSWgYoVwE8q5RypkFsq5RzVM0Fs1bNefNVzQejNWzXnzVc0HpzVc1581XNB6M1XNefNUzoHpzpTOnmzpSaB6JpuaeeaamgX6OkenOgVumLpi6Zugd1pPVcuk9aA1UtV3WktUGdVLVa1UtUGNVHdb1UtUGNVLTeqlqgzpLTeqnqgzXHLQE8qZqMUzQWzVM1HNUzQWzVc1DNUzQejNVzXmzVc0HpzVc15s1XOgejOlc6ebOlJoHomlJp5ppuaB6JpqaeeaamgW6OkejoFbpm6TumboG7pjWmbpPWgd1pPVNaT1oHNVLVd1pPWgZ1UtVrVS1QZ1U9VrVT1QZ1U9VrVT1QZtdZoCbeaw7AWzVM1HNbzQXzW81HNUlBbNUzUJW5QenOlM6ebOlM6B6c6Umnmmm5oHpmmpp55pqaB6Jp3pCad6Bfo6R6OgVumbpPpm6BS6YumLpm6BrWk9acuk9aB3Wk9ac1pPVA1U7XbU7QNVPVdtT1Qc1U9VrVTtBy0cAcABqVSVFuUFpVJUJVJQWlblRlblBaVuaQlblB6Jpuaeeaamgeiaamnnmm5oF5p3pDp3oF+nOkejoFumbpPpm6BW6YumLpi6Bu6Y1pm6YtBq6YtctYtB21O0tYtAtTtdtTtA1WKWuA7AgDgADrgDcrcqTUoLStyoytSgvK1KjK1NAtK1NIytTQLTTU0jNO9At070j0dAt0dI+nQK9OXSfTnQKXTNrHTloNWs2s3TNoNWsWuXTNoO2sWuWsWg7anaWuAAA7AgDgAAAAANStypOygtNNTSMrUoLStTSMrs0C0070l070CvTvSXR0CvR0l0dAr050n050Cl05dJ9OXQN3TN0zdM3QNWs2s2s2g7azaOAAAAA7AgDgAAAAAAADsrgDcrsqboKdO9Jeu+gr070l0dAr0dJdHQKdHSfrnoKdOXTHrnoNXTlrIDrgAAAAAAA7AgDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOwIA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADsCAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7AgDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOwIA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADsAB//Z")` }} >
                            {/* <img
                        style={{ "width": "20rem", "height": "30rem" }}
                        className="d-block w-100"
                        src="https://i.pinimg.com/474x/b1/86/dd/b186ddfdf94dc7da1a5df3a4ac4b8835.jpg"
                        alt="First slide"
                    /> */}
                            <img style={{ "height": "35rem", "padding": "0.5rem" }} src="https://i.pinimg.com/474x/7c/7f/ae/7c7faeb87b1893ea72fadccb2c343cf2.jpg" alt="" />
                            <img style={{ "height": "30rem", "padding": "0.5rem" }} src="https://i.pinimg.com/474x/0b/c3/10/0bc310bdf5f6d3d7f2d26523a196849b.jpg" alt="" />
                            <img style={{ "height": "25rem", "padding": "0.5rem" }} src="https://i.pinimg.com/474x/6e/e5/51/6ee55146f52645e57eb8eadbf4309850.jpg" alt="" />
                            <img style={{ "height": "20rem", "padding": "0.5rem" }} src="https://i.pinimg.com/474x/95/61/9f/95619f9a7ade775209011c8895a9ee41.jpg" alt="" />
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Carousel.Caption >
                            <h1 style={{ "fontSize": "4rem", "color": "white" }}>Get Your next</h1>
                            <p style={{ "color": "white" }} >
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                        <div className='images' style={{ "backgroundImage": `url("data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBwoHBw0HBwcHBw0HBwcHCA8ICQcKFREWFhURExMYHSggGCYxJxMTITEhMSkrLi4uFx8zODMsNygtLjcBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMEBBQMBIgACEQEDEQH/xAAZAAEBAQEBAQAAAAAAAAAAAAAAAwIBBAf/xAAYEAEBAQEBAAAAAAAAAAAAAAAAAQISEf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD43lXKOVcgrlXKOVcgtlbCGVsUF8VbDz4q2KD0Yq2a8+atmg9GatmvPmq5oPRmrZrzZqudA9Oa3NPPnTc0C/RdI9F0DetJarl0xrQOaqWq7rSeqDG6jqt6qWqCeqjtTVR1QT3UdqbqO6Ce0dK7qOgT0npTSWgYoVwE8q5RypkFsq5RzVM0Fs1bNefNVzQejNWzXnzVc0HpzVc1581XNB6M1XNefNUzoHpzpTOnmzpSaB6JpuaeeaamgX6OkenOgVumLpi6Zugd1pPVcuk9aA1UtV3WktUGdVLVa1UtUGNVHdb1UtUGNVLTeqlqgzpLTeqnqgzXHLQE8qZqMUzQWzVM1HNUzQWzVc1DNUzQejNVzXmzVc0HpzVc15s1XOgejOlc6ebOlJoHomlJp5ppuaB6JpqaeeaamgW6OkejoFbpm6TumboG7pjWmbpPWgd1pPVNaT1oHNVLVd1pPWgZ1UtVrVS1QZ1U9VrVT1QZ1U9VrVT1QZtdZoCbeaw7AWzVM1HNbzQXzW81HNUlBbNUzUJW5QenOlM6ebOlM6B6c6Umnmmm5oHpmmpp55pqaB6Jp3pCad6Bfo6R6OgVumbpPpm6BS6YumLpm6BrWk9acuk9aB3Wk9ac1pPVA1U7XbU7QNVPVdtT1Qc1U9VrVTtBy0cAcABqVSVFuUFpVJUJVJQWlblRlblBaVuaQlblB6Jpuaeeaamgeiaamnnmm5oF5p3pDp3oF+nOkejoFumbpPpm6BW6YumLpi6Bu6Y1pm6YtBq6YtctYtB21O0tYtAtTtdtTtA1WKWuA7AgDgADrgDcrcqTUoLStyoytSgvK1KjK1NAtK1NIytTQLTTU0jNO9At070j0dAt0dI+nQK9OXSfTnQKXTNrHTloNWs2s3TNoNWsWuXTNoO2sWuWsWg7anaWuAAA7AgDgAAAAANStypOygtNNTSMrUoLStTSMrs0C0070l070CvTvSXR0CvR0l0dAr050n050Cl05dJ9OXQN3TN0zdM3QNWs2s2s2g7azaOAAAAA7AgDgAAAAAAADsrgDcrsqboKdO9Jeu+gr070l0dAr0dJdHQKdHSfrnoKdOXTHrnoNXTlrIDrgAAAAAAA7AgDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOwIA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADsCAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA7AgDgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOwIA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADsAB//Z")` }} >
                            {/* <img
                        style={{ "width": "20rem", "height": "30rem" }}
                        className="d-block w-100"
                        src="https://i.pinimg.com/474x/b1/86/dd/b186ddfdf94dc7da1a5df3a4ac4b8835.jpg"
                        alt="First slide"
                    /> */}
                            <img style={{ "height": "35rem", "padding": "0.5rem" }} src="https://i.pinimg.com/474x/0d/5f/31/0d5f31e54017081817356ab8aba18d17.jpg" alt="" />
                            <img style={{ "height": "30rem", "padding": "0.5rem" }} src="https://i.pinimg.com/474x/3c/2d/05/3c2d05239a78308f618a865641b150d3.jpg" alt="" />
                            <img style={{ "height": "25rem", "padding": "0.5rem" }} src="https://i.pinimg.com/474x/3e/23/71/3e23710e63565ad4323ed48cb3e68ca5.jpg" alt="" />
                        </div>
                    </Carousel.Item>
                </Carousel>
                <div className='seconddiv' style={{ "backgroundColor": "khaki", "display": "flex", "height": "45rem" }} >
                    <div className='imagesec' style={{ "position": "relative", "padding": "5rem", "cursor": "pointer" }}>
                        <img src="https://s.pinimg.com/webapp/left-511a9304.png" alt="" style={{ "width": "15rem", "position": "absolute", "marginLeft": "1rem", "marginTop": "6rem" }} />
                        <img src="https://s.pinimg.com/webapp/topRight-d0230035.png" alt="" style={{ "width": "13rem", "position": "absolute", "marginLeft": "20rem" }} />
                        <img src="https://s.pinimg.com/webapp/right-88044782.png" alt="" style={{ "width": "13rem", "position": "absolute", "marginLeft": "20rem", "marginTop": "18rem" }} />
                        <img src="https://s.pinimg.com/webapp/center-77497603.png" alt="" style={{ "width": "18rem", "position": "absolute", "marginLeft": "8rem", "marginTop": "3rem" }} />
                        <a href="https://in.pinterest.com/search/pins/?q=easy%20chicken%20dinner"><input type="search" name="input" placeholder="easy chicken" readOnly style={{ "position": "absolute", "width": "18rem", "height": "3rem", "borderRadius": "40px", "fontSize": "1.5rem", "textAlign": "center", "marginLeft": "7rem", "marginTop": "16rem", "fontWeight": "bold", "color": "crimson", "padding": "2rem" }} /></a>
                    </div>
                    <div className='content-sec' style={{ "color": "crimson", "textAlign": "center", "marginLeft": "34rem", "paddingTop": "16rem" }} >
                        <h1 style={{ "fontSize": "3rem", "fontWeight": "bold" }}>Search for an idea</h1>
                        <p style={{ "fontSize": "1.2rem", "fontWeight": "400" }}>What do you want to try next??Think <br />
                            for something you're into___"like easy <br />chicken dinner"___and  see What you <br />
                            find!!!
                        </p>
                        <h5 style={{ "color": "khaki", "borderRadius": "50px", "backgroundColor": "crimson", "display": "inline", "padding": "0.7rem", "cursor": "pointer" }} >explore</h5>
                    </div>
                </div>
                <div className='thirddiv' style={{ "position": "relative", "backgroundColor": "lightblue", "height": "30rem", "display": "flex" }}>
                    <div className='content-sec' style={{ "color": "teal", "textAlign": "center", "marginTop": "10rem", "marginLeft": "3rem" }} >
                        <h1 style={{ "fontSize": "3rem", "fontWeight": "bold" }}>Save ideas you like</h1>
                        <p style={{ "fontSize": "1.2rem", "fontWeight": "400" }}>Collect you favourites so you can <br /> get back to them later
                        </p>
                        <h5 style={{ "color": "lightblue", "borderRadius": "50px", "backgroundColor": "teal", "display": "inline", "padding": "0.7rem", "cursor": "pointer" }} >Explore</h5>
                    </div>
                    <div className='imagesec' style={{ "cursor": "pointer" }}>
                        <img src="https://s.pinimg.com/webapp/deck-of-dreams-fb527bf1.png" alt="" style={{ "width": "7rem", "position": "absolute", "marginLeft": "28rem", "marginTop": "13rem" }} />
                        <img src="https://s.pinimg.com/webapp/serve-my-drinks-263547ea.png" alt="" style={{ "width": "12rem", "position": "absolute", "marginLeft": "29.5rem", "marginTop": "1.3rem" }} />
                        <img src="https://s.pinimg.com/webapp/bathroom-upgrade-48ebb8fc.png" alt="" style={{ "width": "9rem", "position": "absolute", "marginLeft": "35rem", "marginTop": "13rem" }} />
                        <img src="https://i.pinimg.com/564x/89/3b/94/893b9460bcecd01d12baba57ab80034c.jpg" alt="" style={{ "width": "15rem", "position": "absolute", "marginLeft": "10rem", "borderRadius": "40px" }} />
                    </div>
                </div>
                <div className='fourthdiv' style={{ "backgroundColor": "lightpink", "height": "36.5rem", "display": "flex" }} >
                    <div className='imagefour' style={{ "position": "relative" }} >
                        <img src="https://s.pinimg.com/webapp/shop-bd0c8a04.png" style={{ "width": "38rem", "position": "absolute" }} alt="" />
                        <img src="https://s.pinimg.com/webapp/creator-pin-img-491ebb56.png" alt="" style={{ "position": "absolute", "width": "13rem", "borderRadius": "15px", "marginTop": "5rem", "marginLeft": "5rem" }} />
                        <img src="https://s.pinimg.com/webapp/creator-avatar-d7a05622.png" alt="" style={{ "position": "absolute", "marginTop": "24.5rem", "marginLeft": "2.5rem", "width": "6rem" }} />
                        <p style={{ "position": "absolute", "color": "white", "fontWeight": "500", "marginTop": "28rem", "marginLeft": "9rem" }} >Scout the City <br /> 56.7k followers </p>
                    </div>
                    <div className='contentfour' style={{ "color": "crimson", "marginLeft": "45rem", "marginTop": "8rem", "textAlign": "center" }} >
                        <h1 style={{ "fontSize": "4rem", "fontWeight": "bold" }}>See it,make it, <br /> try it, do it </h1>
                        <p style={{ "fontSize": "1.2rem", "fontWeight": "400", "margin": "2rem" }}>the best part of the Pinterst is discovering <br />new things and ideas from people <br />around the world</p>
                        <h5 style={{ "color": "lightpink", "borderRadius": "50px", "backgroundColor": "crimson", "display": "inline", "padding": "0.7rem", "cursor": "pointer" }} >Explore</h5>
                    </div>
                </div>
                <div className='fifthdiv' style={{ "backgroundImage": `url("https://themacios.com/wp-content/uploads/2021/11/Best-Free-Collage-App-for-iPhone-and-iPad-scaled.jpg")`, "height": "52.5rem", "display": "flex" }} >
                    <div className='text-area' >
                        <h1 style={{ "position": "absolute", "color": "white", "fontSize": "6rem", "marginTop": "12rem", "marginLeft": "3rem","textShadow":"2px 2px 5px black" }} >Sign up to <br />get your <br /> Ideas</h1>
                    </div>
                    <div id='signup-card' >
                        <Card className="text-center" style={{ "width": "30rem", "marginLeft": "37rem" ,"opacity":"0.8"}}>
                            <img src={pinterest} style={{ "width": "4rem", "marginLeft": "47%", "marginTop": "1rem" }} alt="" />
                            <h3 style={{ "marginTop": "1rem" }}>Welcome to Pinterest </h3>
                            <h6>Find new ideas to try</h6>
                            <Card.Body>
                                <div style={{ "textAlign": "left", "marginLeft": "5.5rem" }} >
                                    <Form onSubmit={handleSignup} >
                                        <Form.Group className="mb-3" >
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control type="text" placeholder="Enter your name" name='name' />
                                        </Form.Group>

                                        <Form.Group className="mb-3" >
                                            <Form.Label>E-mail</Form.Label>
                                            <Form.Control type="email" placeholder="Enter your email" name='email' />
                                            <Form.Text className="text-muted">
                                                We'll never share your email with anyone else.
                                            </Form.Text>
                                        </Form.Group>

                                        <Form.Group className="mb-3" >
                                            <Form.Label>Mobile</Form.Label>
                                            <Form.Control type="text" placeholder="Enter mobile number" name='mobile' />
                                        </Form.Group>

                                        <Form.Group className="mb-3" >
                                            <Form.Label>Birthdate</Form.Label>
                                            <Form.Control type="date" placeholder="Enter mobile number" name='dob' />
                                        </Form.Group>

                                        <Form.Group className="mb-3" >
                                            <Form.Label>Password</Form.Label>
                                            <Form.Control type="password" placeholder="Password" name='password' />
                                        </Form.Group>

                                        <Button variant="danger" type="submit" style={{ "width": "16rem", "margin": "1rem", "borderRadius": "50px", "fontWeight": "bold" ,"cursor":"pointer" }}>
                                            Continue
                                        </Button>
                                        <h6 style={{"marginLeft":"8rem"}} >OR</h6>
                                        <Button variant="primary" style={{ "width": "16rem", "margin": "1rem", "borderRadius": "50px", "fontWeight": "bold" ,"cursor":"pointer"}}>continue with facebook</Button>
                                    </Form>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    }

    export default Dashboard