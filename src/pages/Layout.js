import {Outlet} from "react-router-dom";
import Header from "../components/header/Header";
import Login from "../components/modal-auth/login/Login";
import useAuth from "../hooks/use-auth";
import {useDispatch} from "react-redux";
import {useEffect, useState} from "react";
import {removeUser, setUser} from "../store/slices/userSlice";

export default function Layout() {
	const {isAuth, email} = useAuth();
	const [isLoading, setIsLoading] = useState(true);
	const [showLogin, setShowLogin] = useState(false);
	const dispatch = useDispatch();
	
	useEffect(() => {
		const storedUser = localStorage.getItem('user');
		if (storedUser) {
			const user = JSON.parse(storedUser);
			dispatch(setUser(user));
		}
		setIsLoading(false);
	}, [dispatch]);
	
	const handleLoginButtonClick = () => {
		setShowLogin(true);
	};
	
	const handleLoginSuccess = () => {
		setShowLogin(false);
	};
	
	return(
		<div className="page">
			<Header />
			
			<main className="main">
				<Outlet />
				
				{isLoading ? (
					<div>Loading...</div>
				) : (
					<div>
						{isAuth ? (
							<div>
								<div>Welcome, {email}</div>
								<button onClick={() => dispatch(removeUser())}>
									Log out
								</button>
							</div>
						) : (
							<div>
								<div>Do you have account ?</div>
								<button onClick={handleLoginButtonClick}>
									Login
								</button>
							</div>
						)}
						{showLogin && <Login onLoginSuccess={handleLoginSuccess}/>}
					</div>
				)}
			</main>
		</div>
	)
}