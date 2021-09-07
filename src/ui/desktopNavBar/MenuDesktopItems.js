import React from 'react';
import { NavLink } from 'react-router-dom';


export const MenuDesktopItems = () => {
    return (
        <>
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/"                        
                    >
                        Inicio
                    </NavLink>                   
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/somos"
                        
                    >
                        Somos
                    </NavLink>
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/servicios"
                        
                    >
                        Servicios
                    </NavLink>
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/clientes"
                        
                    >
                        Clientes
                    </NavLink>
                    <NavLink
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/contacto"
                        
                    >
                        Contacto
                    </NavLink>
        </>
    )
}
