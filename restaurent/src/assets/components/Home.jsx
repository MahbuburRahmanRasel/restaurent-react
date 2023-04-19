import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Menu from './Menu';
import Navbar from './Navbar';

const Home = () => {


    const data = useLoaderData()
    console.log(data)
    


    return (
        <div className='grid grid-cols-3'>
            {
                data.map(menu =>
                    
                    <Menu 
                    
                    key = {menu.id}
                    menu = {menu}
                    
                    />
                   

                    )
            }
        </div>
    );
};

export default Home;