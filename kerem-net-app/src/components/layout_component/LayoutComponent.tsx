import React from 'react';
import logo from '../../assets/KeremNetLogo.jpg'
import { NavLink, Outlet } from 'react-router-dom';

const HeadStyle: React.CSSProperties = {
    width:'100%',

    justifyContent:'space-between',
    display:'flex'
}

const LogoStyle: React.CSSProperties = {
    margin:'.1%',
    maxHeight:'3em',
    borderRadius:'50%'
}

export function Layout(){
    return ( 
        <div>
            <div style={HeadStyle}>
                <NavLink key='Home' to={`/`}> HOME </NavLink>
                <img style={LogoStyle} src={logo} alt=''></img>
            </div>
            <div >
                <Outlet/>
            </div>
        </div>
    );
}