import React from 'react';


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
    }
];
const JsonNavbar = () => {

    return (
        <nav className='flex justify-between mx-4'>
            <h1>Navbar</h1>
            <ul className='flex gap-5'> {
                navbar.map(navbardata => <li key={navbardata.id}><a href={navbardata.link}>{navbardata.name}</a></li>)
            }
            </ul>
            <button>Button</button>
        </nav>
    );
};

export default JsonNavbar;