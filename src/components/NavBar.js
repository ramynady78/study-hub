import { useEffect, useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar(){
  const [open, setOpen] = useState(false);
  const navbarRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setOpen(false); 
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const handleChnage = () => {
    setTimeout( () => {setOpen(false)}, 100)
  };

    return (
    <Navbar expand="lg" className="bg-body-tertiary mb-4 nav-bar" fixed='top' ref={navbarRef}>
      <Container>
        <Link to={'/'} className='nav-link' onClick={handleChnage}>StudyHub</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav"  onClick={() => setOpen(!open)}/>
        <Navbar.Collapse id="basic-navbar-nav" in={open}>
          <Nav className="ms-auto">
            <Link to={"/"} className='nav-link' onClick={handleChnage}>Home</Link>
            <Link className='nav-link' to={"/courses"} onClick={handleChnage}>Courses</Link>
            <Link className='nav-link' to={"/my-courses"} onClick={handleChnage}>My Courses</Link>
            <Link className='nav-link' to={"/about-us"} onClick={handleChnage} >About Us</Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
    
}

export default NavBar;