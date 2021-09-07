import React from 'react';
import logo from '../../components/images/jrdicon.png'
import { MenuDesktopItems } from './MenuDesktopItems';

export const DesktopNavBar = () => {
    return (
        <>
            <nav className="navbar d-none d-lg-block navbar-expand-lg navbar-light bg-light justify-content-between">            

                <div className="navbar-collapse d-flex justify-content-between">
                    <div>
                        <img src={logo} alt="Logo Tiempo extra" className="img img-fluid" />
                    </div>
                    
                    <div className="navbar-nav d-none d-lg-flex">
                        <MenuDesktopItems />
                    </div>
                </div>           
            </nav>
        </>
    )
}
