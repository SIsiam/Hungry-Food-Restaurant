import React from 'react';
import './Footer.css'
import { Link } from 'react-router-dom';

import burger from "../../Image/folder/burger-logo.png";

const Footer = () => {
    return (
        <footer className="bg-dark py-3" id="location">
            <div className="container">
                <div className="row footer-top py-5">
                    <div className="col-md-3 mb-5">
                        <img src={burger} alt="Hot Onion White Logo" />
                        <p className="text-light">
                            Turpis tincidunt id aliquet feugiat. Lectus magna fringilla urna porttitor rhoncus. Velit sed ullamcorper morbi tincidunt ornare mas.
                        </p>
                    </div>
                    <div className="col-md-3">
                        <h3 className="text-light">Recent</h3>
                        <ul className="list-unstyled">
                            <li><Link to="/about">About Sea Food</Link></li>
                            <li><Link to="/blog">About Dessert Food</Link></li>
                            <li><Link to="/login">About Burger Food</Link></li>
                            <li><Link to="/about">About Salad Food</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h3 className="text-light">Help</h3>
                        <ul className="list-unstyled">
                            <li><Link to="/help">Get Help</Link></li>
                            <li><Link to="/faq">Read FAQ</Link></li>
                            <li><Link to="/cities">View All Cities</Link></li>
                            <li><Link to="/nearme">Restaurants near me</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <h3 className="text-light">Contact</h3>
                        <ul className="list-unstyled">
                            <li><Link to="/help">Reon, 1535 Broadway, London</Link></li>
                            <li><Link to="/faq"> +100019213 </Link></li>
                            <li><Link to="/cities">Conatct123@gmail.com</Link></li>
                            <li><Link to="/nearme">Restaurants near me</Link></li>
                        </ul>
                    </div>
                </div>
                <hr className="text-light" />
                    <p className="text-light text-center">Copyright &copy; 2021 Hungry Food Restaurant - HFR  </p>
            </div>
        </footer>
    );
};

export default Footer;