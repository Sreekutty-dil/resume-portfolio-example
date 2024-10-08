import React, { useEffect , useState } from 'react';
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Home(props) {
    const [txt,setTxt] = useState("")

    // Randomly change designation every 5 seconds
    const handler = () => {
        let arr = ["MERN FullStack Developer","Fronted Developer","MERN Developer"]
        setTxt(arr[Math.round(Math.random() * 2)])
    }
    
    useEffect(() => {
        setInterval(handler,5000)
        // clearInterval(function() {
        //     handler()
        // },1000)
    },[])

    return(
        <div className="container">
            <div className="background">
                <div className="name">
                    <h1>Sreekutty.P.S</h1>
                    <h3>I'm a <span className='desg'> {txt} </span></h3>
                    <div className="icons">
                        <Link to={'https://github.com/Sreekutty-dil'} className='link' target='-blank' > <FaGithubSquare/> </Link>
                        <Link to={'https://www.linkedin.com/in/sreekutty-p-s'} className='link' target='-blank' > <FaLinkedin/> </Link>
                        <Link to={'https://www.instagram.com/sreekutty-dil-kumar'} className='link' target='-blank' > <FaInstagramSquare/> </Link>
                        <Link to={'https://www.twitter.com/'} className='link' target='-blank' > <FaXTwitter/> </Link>
                        <Link to={'https://www.facebook.com/'} className='link' target='-blank' > <FaFacebook/> </Link>
                        
                    </div>
                </div>
                <div className="user-image"></div>
            </div>
        </div>
    )
}