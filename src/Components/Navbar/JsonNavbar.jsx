import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';


const navbar = [
    {
        id: 1,
        name: "Home",
        link: "/home"
    },
    {
        id: 2,
        name: "Blog",
        link: "/blog"
    },
    {
        id: 3,
        name: "Support",
        link: "/support"
    },
    {
        id: 4,
        name: "About",
        link: '/about'
    }
];
const JsonNavbar = () => {

    const [open, setOpen] = useState(false);

    const links = navbar.map(navbardata => <li key={navbardata.id}><a href={navbardata.link}>{navbardata.name}</a></li>);

    return (
        <nav className='flex justify-between mx-4 mt-2'>

            <span className='flex' onClick={() => setOpen(!open)}>

                {open ?
                    <X className='md:hidden'></X> :
                    <Menu className='md:hidden'></Menu>
                }

                <ul className='md:hidden'>
                    {
                        links
                    }
                </ul>

                <h1 className='ml-4'>Navbar</h1>
            </span>

            <ul className='hidden md:flex gap-5'>

                {
                    links
                }

            </ul>

            <button className='btn'>Sign In</button>
        </nav>
    );
};

export default JsonNavbar;