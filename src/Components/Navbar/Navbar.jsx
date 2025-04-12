import React from 'react';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center mx-4'>
            <h1>MY NAVBAR</h1>
            <div className='flex gap-5'>
                <a href="/">Home</a>
                <a href="/blog">Blog</a>
                <a href="/about">About</a>
            </div>
            <button className='btn'>Login</button>
        </div>
    );
};

export default Navbar;