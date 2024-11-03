import React, { useState } from "react";
import { NavLink as RRNavLink, useNavigate } from "react-router-dom";
import { logout } from "./Managers/UserProfileManager";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";


export default function Header({ isLoggedIn, setIsLoggedIn }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
const navigate=useNavigate()
  
const handleLogout = () => {
    logout();
    setIsLoggedIn(false);
   navigate("/login")
  };

  return (
    <div>
      <Navbar color="light" light expand="md">
       
        
        
       
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {isLoggedIn && (
              <>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/">Home</NavLink>
                </NavItem>
                {/* { <NavItem>
                  <NavLink tag={RRNavLink} to="/planWorkout">Plan a Workout</NavLink>
                </NavItem> } */}
                <NavItem>
                  <NavLink tag={RRNavLink} to="/fullBody">Full-Body Workout</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/workoutList">WorkoutList</NavLink>
                </NavItem>

              </>
            )}
          </Nav>
          <Nav navbar>
            {isLoggedIn ? (
              <NavItem>
                <a
                  aria-current="page"
                  className="nav-link"
                  style={{ cursor: "pointer" }}
                  onClick={handleLogout}
                >
                  Logout
                </a>
              </NavItem>
            ) : (
              <>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/login">Login</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink tag={RRNavLink} to="/register">Register</NavLink>
                </NavItem>
              </>
            )}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}