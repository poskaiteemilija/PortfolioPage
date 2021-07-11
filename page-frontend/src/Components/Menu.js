import React from "react";
import { Router } from "react-router-dom";
import {
    Nav,
    Bars,
    NavMenu,
    NavLink,
} from "./Navbar/NavbarElements";

const Menu = () => {
        return(
            <div classname="nav-bar">
                <Nav>
                    <Bars></Bars>
                    <NavMenu>
                        <NavLink to="/about" activeStyle>
                            About
                        </NavLink>
                    </NavMenu>
                </Nav>
                
            </div>
        );
}


export default Menu;