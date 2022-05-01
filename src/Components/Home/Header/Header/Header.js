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
    <div>
      <Navbar bg="light" expand="lg">
        <Container className="mt-3 mb-3">
          <Navbar.Brand as={Link} to="/" className="logo">
            {" "}
            CAR VALLEY{" "}
          </Navbar.Brand>
          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto nav">
                <Link to="/">home</Link>
                <Link to="Gallery">Gallery</Link>
                <Link to="Reviews">Reviews</Link>
                <Link to="Services">Services</Link>
                <Link to="Blog"> Blog</Link>
                {user ? <Link to="ManageCars">Manage Cars</Link> : ""}
                {user ? <Link to="MyCars">My Cars</Link> : ""}
                {user ? <Link to="AddCar">Add Car</Link> : ""}
                {user ? (
                  <Link onClick={() => handleLogout()} to="/">
                    Logout
                  </Link>
                ) : (
                  <Link to="Login">Login</Link>
                )}
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
