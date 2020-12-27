import React from 'react'
import bootstrap from 'bootstrap';


export const Navbar: React.FC = () => {

    return (<>
        <nav className="navbar sticky-top  navbar-expand-lg navbar-dark bg-secondary">
            <div className="container-fluid">
                <a className="navbar-brand" >Atletyka</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="#">Wykonaj test</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Wyniki</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Dodaj Test</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>)
}