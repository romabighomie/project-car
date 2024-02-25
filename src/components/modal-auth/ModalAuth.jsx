import "./modal-auth.scss";
import {useEffect, useState} from "react";
import {createPortal} from "react-dom";
import useAuth from "../../hooks/useAuth";

export default function ModalAuth({ title, handleClick, buttonText, isModalOpen, setIsModalOpen }) {
	const modalRoot = document.getElementById('modal-root');
	
	const {isAuth} = useAuth();
	
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	
	const handleSubmit = (event) => {
		event.preventDefault();
		handleClick(email, password);
	};
	
	useEffect(() => {
		if(isAuth) {
			setIsModalOpen(false);
		}
	}, [isAuth])
	
	return(
		<>
			{isModalOpen && createPortal(
				<div className="page-overlay">
					
					<div className="modal-auth">
						
						<button
							className="modal-auth__close"
							onClick={() => setIsModalOpen(false)}
						>
							&times;
						</button>
						
						<form className="modal-auth__body" onSubmit={handleSubmit}>
							
							<div className="modal-auth__title">
								{title}
							</div>
							
							<div className="modal-auth__inputs-wrapper">
								<div className="modal-auth__inputs-group">
									<label
										className="modal-auth__label"
										htmlFor="email"
									>
										Email
									</label>
									
									<input
										id="email"
										className="modal-auth__input"
										type="email"
										value={email}
										placeholder="yourmail@gmail.com"
										onChange={(event => setEmail(event.target.value))}
									/>
								</div>
								
								<div className="modal-auth__inputs-group">
									<label
										className="modal-auth__label"
										htmlFor="password"
									>
										Password
									</label>
									
									<input
										id="password"
										className="modal-auth__input"
										type="password"
										value={password}
										placeholder="•••••••••••••"
										onChange={(event => setPassword(event.target.value))}
									/>
								</div>
							</div>
							
							<div className="modal-auth__button-wrapper">
								<button
									className="modal-auth__button"
									type="submit"
								>
									{buttonText}
								</button>
							</div>
						
						</form>
					</div>
				
				</div>
			,modalRoot)}
		</>
	)
}