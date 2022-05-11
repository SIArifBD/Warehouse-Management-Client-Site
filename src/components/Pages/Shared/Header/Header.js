import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../../../Firebase/firebase.init';
import logo from '../../../images/icon/logo.png';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={30} src={logo} alt="" />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="home">Home</Nav.Link>
                            <Nav.Link as={Link} to="blog">Blogs</Nav.Link>
                            {/* <Nav.Link href="home#product">Products</Nav.Link> */}
                        </Nav>
                        <Nav>
                            {
                                user && <>
                                    <Nav.Link as={Link} to="manageInventory">Manage Items</Nav.Link>
                                    <Nav.Link as={Link} to="uploadPd">Add Item</Nav.Link>
                                    {/* <Nav.Link as={Link} to="inventory">Inventory</Nav.Link> */}
                                    <Nav.Link as={Link} to="myItem">My Items</Nav.Link>
                                </>
                            }
                            {
                                user ? <span> {user.displayName}
                                    <button className='btn btn-link text-white text-decoration-none' onClick={() => signOut(auth)}>Logout</button>
                                </span> :
                                    <Nav.Link as={Link} to="login">
                                        Login
                                    </Nav.Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div >
    );
};

export default Header;