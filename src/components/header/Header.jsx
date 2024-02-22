import "./header.scss";
import {ReactComponent as IconUserAdd} from "../../assets/svg/user-add.svg"
import {useState} from "react";
import Registration from "../modal-auth/registration/Registration";

export default function Header() {
	const [showRegistration, setShowRegistration] = useState(false);
	
	const handleOpenRegistration = () => {
		setShowRegistration(true);
	};
	
	const handleRegistrationSuccess = () => {
		setShowRegistration(false);
	};
	
	return(
		<header className="header">
			<div className="header__container">
				<div className="header__logo">LOGO</div>
				<div className="header__menu">
					<button
						className="header__menu-item"
						onClick={handleOpenRegistration}
					>
						<IconUserAdd className="header__menu-icon" />
					</button>
				</div>
			</div>
			
			{showRegistration && <Registration onRegistrationSuccess={handleRegistrationSuccess}/>}
		</header>
	)
}