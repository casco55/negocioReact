import React, { useState } from 'react';
import {  NavLink } from 'react-router-dom';
import { useToggleMenu } from '../../components/hooks/useToggleMenu';
import logo from '../../components/images/jrdicon.png';


export const MobileNavBar = () => {


    const { mobileMenu, handleToggleBar } = useToggleMenu();

    return (
        <>
            <nav className="navbar d-block d-lg-none navbar-expand-lg navbar-light bg-light">            

                <div className="navbar-collapse">

                    <div className="navbar-collapse d-flex justify-content-between col-12">
                        <div>
                            <img src={logo} alt="Logo Tiempo extra" className="img img-fluid" />
                        </div>
                        
                        <div className="text-light py-1 px-3 rounded border border-dark" onClick={ handleToggleBar }>
                            <i class="fas fa-2x fa-bars"></i>
                        </div>
                    </div>

                    <div className={mobileMenu ? `navbar-nav col-12` : `d-none`}>
                        <NavLink
                            onClick={ handleToggleBar }
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/"                            
                        >
                            Inicio
                        </NavLink>                   
                        <NavLink
                            onClick={ handleToggleBar }
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/somos"
                            
                        >
                            Somos
                        </NavLink>
                        <NavLink
                            onClick={ handleToggleBar }
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/servicios"
                            
                        >
                            Servicios
                        </NavLink>
                        <NavLink
                            onClick={ handleToggleBar }
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/clientes"
                            
                        >
                            Clientes
                        </NavLink>
                        <NavLink
                            onClick={ handleToggleBar }
                            activeClassName="active"
                            className="nav-item nav-link" 
                            exact
                            to="/contacto"
                            
                        >
                            Contacto
                        </NavLink>
                    </div>
                </div>           
            </nav>
        </>
    )
}
