import "./modal-auth.scss";
import {useState} from "react";

export default function ModalAuth({ title, handleClick, buttonText }) {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	
	const handleSubmit = (event) => {
		event.preventDefault();
		handleClick(email, password);
	};
	
	return(
		<div className="page-overlay">
			
			<div className="modal-auth">
				
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
	)
}