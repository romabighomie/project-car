import "./header.scss";
import Button from "../button/Button";
import Registration from "../modal-auth/registration/Registration";
import {useState} from "react";
import Login from "../modal-auth/login/Login";
import useAuth from "../../hooks/useAuth";
import {Link} from "react-router-dom";

export default function Header() {
	const [isModalOpenLogin, setIsModalOpenLogin] = useState(false);
	const [isModalOpenRegistration, setIsModalOpenRegistration] = useState(false);
	
	const {isAuth} = useAuth();
	
	const openModalLogin = () => {
		setIsModalOpenLogin(true);
	}
	
	const openModalRegistration = () => {
		setIsModalOpenRegistration(true);
	}
	
	return(
		<>
			<header className="header">
				<div className="header__container">
					<Link className="header__logo" to="/">LOGO</Link>
					
					<div className="header__menu">
						{!isAuth &&
							<>
								<Button
									type="button"
									text="Login"
									color="green"
									onClick={openModalLogin}
								/>
								
								<Button
									type="button"
									text="Registration"
									color="blue"
									onClick={openModalRegistration}
								/>
							</>
						}
						{isAuth &&
							<>
								<Link to="/favorites">Favorites</Link>
								<Link to="/profile">Profile</Link>
							</>
						}
					</div>
				</div>
			</header>
			
			<Login
				isModalOpen={isModalOpenLogin}
				setIsModalOpen={setIsModalOpenLogin}
			/>
			<Registration
				isModalOpen={isModalOpenRegistration}
				setIsModalOpen={setIsModalOpenRegistration}
			/>
		</>
	)
}