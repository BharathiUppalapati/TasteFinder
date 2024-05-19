// import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import './Navbar.css'; // Import the CSS file for Navbar styles

export default function Navbar() {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    const handleMenuClick = (e) => {
        if (!isAuthenticated) {
            e.preventDefault();
            alert("Please log in before accessing the menu.");
            navigate("/login");
        }
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-rose-pink">
                <div className="container-fluid">
                    <Link className="navbar-brand fs-1 fst-italic" to="/">TasteMingle</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/menu" onClick={handleMenuClick}>Menu</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/login">Login/Signup</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
