import "./header.scss";
import Button from "../button/Button";
import Registration from "../modal-auth/registration/Registration";
import {useState} from "react";
import Login from "../modal-auth/login/Login";
import useAuth from "../../hooks/useAuth";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCartShopping, faHeart, faUser} from '@fortawesome/free-solid-svg-icons'

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
				<div className="container">
					<div className="header__container">
						<Link className="header__logo" to="/">Project Car</Link>
						
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
								<Link className="header__menu-item" to="/favorites"><FontAwesomeIcon icon={faHeart} /></Link>
								<Link className="header__menu-item" to="/cart"><FontAwesomeIcon icon={faCartShopping} /></Link>
								<Link className="header__menu-item" to="/profile"><FontAwesomeIcon icon={faUser} /></Link>
							</>
							}
						</div>
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