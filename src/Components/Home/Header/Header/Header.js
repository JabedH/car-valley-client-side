import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../../firebase.init";
import logo from "../../../../img/logo.png";
import "./Header.css";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleLogout = () => {
    signOut(auth);
  };
  return (
    <>
      <Navbar sticky="top" className="navbar" expand="lg">
        <Container className="mt-3 mb-3 ">
          <Navbar.Brand as={Link} to="/" className="logo">
            {" "}
            CAR VALLEY{" "}
          </Navbar.Brand>
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto nav">
                <Link to="/">HOME</Link>
                <Link to="Reviews">REVIEWS</Link>
                <Link to="Services">SERVICES</Link>
                <Link to="Blog"> BLOG</Link>
                {user ? <Link to="ManageItems"> MANAGE ITEM</Link> : ""}
                {user ? <Link to="AddItem">ADD ITEM</Link> : ""}
                {user ? <Link to="myitems">MY ITEMS</Link> : ""}
                {user ? (
                  <Link onClick={() => handleLogout()} to="/">
                    LOGOUT
                  </Link>
                ) : (
                  <Link to="Login">Login</Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
