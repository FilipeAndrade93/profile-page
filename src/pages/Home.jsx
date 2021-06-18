import React, { useState } from 'react'
import About from '../Components/About/About';
import Banner from '../Components/Banner/Banner';
import Navbar from '../Components/Navbar/Navbar'
import Sidebar from '../Components/Sidebar/Sidebar'

function Home() {
    const [ isOpen, setIsOpen ] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
           <Sidebar isOpen={isOpen} toggle={toggle}/>
           <Navbar toggle={toggle}/>
           <Banner />
           <About />
        </>
    );
};

export default Home
