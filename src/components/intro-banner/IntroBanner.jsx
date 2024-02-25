import "./intro-banner.scss";
import Button from "../button/Button";
import {useNavigate} from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Login from "../modal-auth/login/Login";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {setUser} from "../../store/slices/userSlice";
import Registration from "../modal-auth/registration/Registration";

export default function IntroBanner({ title, text, img }) {
	const carImagePath = `images/${img}.png`;
	const {isAuth} = useAuth();
	const navigate = useNavigate();
	const [isModalOpenLogin, setIsModalOpenLogin] = useState(false);
	const [isModalOpenRegistration, setIsModalOpenRegistration] = useState(false);
	
	const handleClick = () => {
		const storedUser = localStorage.getItem('lastUser');
		
		if(isAuth) {
			navigate('/cashier');
		}
		
		if (storedUser) {
			setIsModalOpenLogin(true);
		} else {
			setIsModalOpenRegistration(true);
		}
	}
	
	return(
		<>
			<div className="intro-banner">
				<div className="intro-banner__body">
					<div className="intro-banner__title">
						{title}
					</div>
					
					<div className="intro-banner__text">
						{text}
					</div>
					
					<div className="intro-banner__button">
						<Button
							type="button"
							text="Buy Car"
							color="green"
							onClick={handleClick}
						/>
					</div>
				</div>
				
				<img className="intro-banner__image-car" src={carImagePath}  alt="" />
			</div>
			
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