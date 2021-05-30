import React from 'react';
import logo from '../../Image/folder/burger-logo.png';
import { FaShoppingCart } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from '../firebase/firebase.config';
import { signedOutUser } from '../../redux/actions';
import { Items } from './NavBar-Style';

const NavBar = () => {
	const hist = useHistory();
	const dispatch = useDispatch();
	//firebase initialize
	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfig);
	}
	const loginInfo = useSelector((state) => state.userInfo);
	const cartQuantity = useSelector((state) => state.cart);

	const signedOut = () => {
		firebase
			.auth()
			.signOut()
			.then((res) => {
				dispatch(signedOutUser());
				hist.push('/');
			})
			.catch((error) => {
				console.log(error.message);
			});
	};

	return (
		<Items className="container nav-box">

			<nav className="navbar navbar-expand-lg navbar-light bg-white py-2">
				<div className="container">
					<Link to="/">
						<img src={logo} alt="logo" className="img-fluid logo" />
					</Link>
					<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>
					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav ms-auto py-3">
							<li class="nav-item">
								<a class="nav-link active" href="#menu">Menu</a>
							</li>

							<li class="nav-item">
								<a class="nav-link" href="#Events">Events</a>
							</li>

							<li class="nav-item">
								<a class="nav-link" href="#services">Services</a>
							</li>

							<li class="nav-item">
								<a class="nav-link" href="#location">Locations</a>
							</li>

							<li class="nav-item">

								{loginInfo.displayName ? (
									<Link to="/user-info" className="user nav-link">
										{loginInfo.displayName}
									</Link>
								) : (
									<Link to="/login" className="nav-link">Login</Link>
								)}

							</li>

							<li class="nav-item">

								{loginInfo.email ? (
									<Link to="/" onClick={signedOut} className="nav-link">
										Logout
									</Link>
								) : (
									<Link to="/signup" className="nav-link">Sign up</Link>
								)}

							</li>

							<li class="nav-item">
								<Link to="/cart" className="nav-link">
									<FaShoppingCart className="cart" />{' '}
									<strong>Order : {cartQuantity.length}</strong>
								</Link>
							</li>

						
						</ul>
					</div>
				</div>

			</nav>
		</Items >
	);
};

export default NavBar;
