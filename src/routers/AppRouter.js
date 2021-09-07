import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    Route,
    BrowserRouter as Router,
    Switch,
} from "react-router-dom"
import { Clients } from '../components/clientes/Clients'
import { Contact } from '../components/contacto/Contact'
import { Home } from '../components/home/Home'
import { Services } from '../components/servicios/Services'
import { AboutUs } from '../components/somos/AboutUs'
import { NavBar } from '../ui/NavBar'




export const AppRouter = () => {

    

    return (
        <>
         
        
        <Router>
            
                
                    <div >
                    <NavBar />                          
                        <Switch>
                            <Route
                                exact
                                path="/"
                                component={ Home }
                                                  
                            />                       
                            
                            <Route                                
                                exact
                                path="/somos"                        
                                component={ AboutUs }                        
                            />

                            <Route                                
                                exact
                                path="/servicios"                        
                                component={ Services }                        
                            />

                            <Route                                
                                exact
                                path="/clientes"                        
                                component={ Clients }                        
                            />
                            <Route                                
                                exact
                                path="/contacto"                        
                                component={ Contact }                        
                            />

                            
                            
                               
                        </Switch>
                    </div>

            
        </Router>
        </>
    )
}