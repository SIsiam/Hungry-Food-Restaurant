import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { FaFacebookSquare, FaGithub, FaGoogle } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import firebaseConfig from '../components/firebase/firebase.config';
import { loggedInUser } from '../redux/actions';
import { FormContainer, MainDiv } from './SignUpStyle';
import bg from '../Image/folder/app.png';

const LogIn = () => {
	const history = useHistory();
	const location = useLocation();
	const { from } = location.state || { from: { pathname: '/cart' } };
	//firebase initialize
	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfig);
	}
	//redux
	const dispatch = useDispatch();
	//state
	const [user, setUser] = useState({
		email: '',
		password: ''
	});

	//handle input data
	const handleInput = (e) => {
		setUser({
			...user,
			[e.target.name]: e.target.value
		});
	};

	const setUserToken = () => {
		firebase
			.auth()
			.currentUser.getIdToken(true)
			.then(function (idToken) {
				sessionStorage.setItem('token', idToken);
				console.log(idToken);
			})
			.catch((error) => {
				alert(error.message);
			});
	};

	//google login handle
	var provider = new firebase.auth.GoogleAuthProvider();
	const googleLogin = () => {
		firebase
			.auth()
			.signInWithPopup(provider)
			.then((result) => {
				dispatch(loggedInUser(result.user));
				toast.success('Logged In Successfully');
				setUserToken();
				history.replace(from);
			})
			.catch((error) => {
				toast.error(error.message);
			});
	};

	//facebook login handle
	var fbProvider = new firebase.auth.FacebookAuthProvider();
	const fbLogin = () => {
		firebase
			.auth()
			.signInWithPopup(fbProvider)
			.then((result) => {
				dispatch(loggedInUser(result.user));
				toast.success('Logged In Successfully');

				history.replace(from);
			})
			.catch((error) => {
				toast.error(error.message);
			});
	};

	//on form submit
	const handleForm = (e) => {
		e.preventDefault();
		if (!user.email && !user.password) {
			document.getElementById('error').innerText = 'Enter All Values Correctly';
		}
		else {
			firebase
				.auth()
				.signInWithEmailAndPassword(user.email, user.password)
				.then((result) => {
					dispatch(loggedInUser(result.user));
					history.replace(from);
				})
				.catch((error) => {
					document.getElementById('error').innerText = error.message;
				});
		}
	};

	return (
		<MainDiv>
			<FormContainer className="container">
				<div className="row justify-content-center container">

					<div className="col-md-5 col-sm-5">
						<form onSubmit={handleForm}>
							<div className="form-group">
								<input
									type="email"
									name="email"
									className="form-control"
									onChange={handleInput}
									value={user.email}
									placeholder="Email"
								/>
							</div>
							<br />
							<div className="form-group">
								<input
									type="password"
									name="password"
									className="form-control"
									onChange={handleInput}
									value={user.password}
									placeholder="Password"
								/>
							</div>
							<br />
							<button type="submit" className="btn btn-submit">
								Login
							</button>
							<div className="error-catch text-center">
								<p id="error" style={{ color: 'red' }}>
									{''}
								</p>
							</div>
							<Link to="/signup">
								<p>
									<strong>Create a new account</strong>
								</p>
							</Link>
						</form>
						<p className="text-center">
							<strong>Or Login with</strong>
						</p>
						<div className="social-media d-flex justify-content-center ">
							<div className="">
								<FaGoogle onClick={googleLogin} className="icon google" />
							</div>
							<div className="">
								<FaFacebookSquare onClick={fbLogin} className="icon fb" />
							</div>
							<div className="">
								<FaGithub onClick={fbLogin} className="icon github" />
							</div>
							<ToastContainer
								position="top-center"
								autoClose={2000}
								hideProgressBar={false}
								newestOnTop={false}
								closeOnClick
								rtl={false}
								pauseOnFocusLoss
								draggable
								pauseOnHover
							/>
						</div>
					</div>
					<div className="col-md-6 col-sm-6">
						<img src={bg} alt="" className="img-fluid bg" />
					</div>
				</div>
			</FormContainer>
		</MainDiv>
	);
};

export default LogIn;
