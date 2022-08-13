import React from 'react';
import classes from './Topbar.module.css';


const Topbar =(props)=>{
    return (
<header>
<nav className={classes.Topbar}>
<img src="https://i0.wp.com/zeevector.com/wp-content/uploads/LOGO/Amazon-India-Logo-PNG-White.png?fit=636%2C193&ssl=1" alt="Amazone logo" />
</nav>
</header>
    );
}

export default Topbar;