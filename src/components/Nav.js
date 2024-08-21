import { Routes, Route, Link } from 'react-router-dom';
import logo from '../assets/Logo.svg';
import Main from './Main';
import Reservations from '../components/Reservations';

function Nav() {
    return (
        <>
            <nav id="navbar" className="navbar">
                <img src={logo} width="256" alt="Little Lemon logo" />
                <Link to="/" className="nav-item">Home</Link>
                <a href="#about">About</a>
                <a href="#navbar">Menu</a>
                <Link to="/reservations" className="nav-item">Reservations</Link>
                <a href="#navbar">Order Online</a>
                <a href="#navbar">Login</a>
            </nav>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/reservations" element={<Reservations/>} />
            </Routes>
        </>
    );
}

export default Nav;
