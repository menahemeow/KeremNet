import React from 'react';
import { Home } from '../home_component/HomeComponent';
import logo from '../../assets/KeremNetLogo.jpg'
import { createBrowserRouter, Link, NavLink, Outlet, RouterProvider } from 'react-router-dom';
import { Tab } from '@mui/material';

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

const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout/>,
      errorElement:<>404 Not Found</>
    },
    {
      path: '/Home',
      element: <Home/>
    }
])

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