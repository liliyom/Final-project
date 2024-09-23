import {Link} from 'react-router-dom';

import React from 'react'


const Navbar = () => {
  return (
    <ul>
<li>
    <Link to ="/">Home</Link>
    <br/>
    </li>
    <li>
    <Link to ="/about">About</Link>

    <br/>
    </li>
<li>
    <Link to ="/contact">Contact</Link>
    </li>



    </ul>
  )
}

export default Navbar
