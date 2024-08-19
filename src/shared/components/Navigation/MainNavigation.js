import React, {useState} from "react";
import { Link } from 'react-router-dom'


import './MainNavigation.css'

import MainHeader from "./MainHeader";
import NavLinks from "./NavLinks";
import SideDraw from "./SideDraw";
import Backdrop from "../UIElements/Backdrop";

const MainNavigation = props =>{

    const [drawerIsOpen, setDrawerIsOpen] = useState(false)

    const openDrawer = () =>{
        setDrawerIsOpen(true)
    }

    const closeDrawer = () =>{
        setDrawerIsOpen(false)
    }

    return ( 
        <React.Fragment>
            {drawerIsOpen ? <Backdrop onClick={closeDrawer} /> : null}
            {drawerIsOpen ? 
            (
        <SideDraw>
            <nav className="main-navigation__drawer-nav">
                <NavLinks />
            </nav>
        </SideDraw> ) : null
        }
        <MainHeader>
                <button className="main-navigation__menu-btn" onClick={openDrawer}>
                    <span />
                    <span />
                    <span />
                </button>
                <Link to='/'>
                    <h1 className="main-navigation__title">Your Places</h1>
                </Link>
                <nav className="main-navigation__header-nav">
                    <NavLinks />
                </nav>
        </MainHeader>
        </React.Fragment>


    )
}

export default MainNavigation