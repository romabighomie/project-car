import {useDispatch} from "react-redux";
import {setUser} from "store/slices/userSlice"
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import ModalAuth from "../ModalAuth";

export default function Registration({ onRegistrationSuccess }) {
	const dispatch = useDispatch();
	
	const handleRegister = (email, password) => {
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, email, password)
			.then(({user}) => {
				dispatch(setUser({
					email: user.email,
					id: user.uid,
					token: user.accessToken,
				}))
				onRegistrationSuccess();
				console.log(user);
			})
			.catch(console.error)
	}

	return(
		<div>
			<ModalAuth
				title="Registration"
				buttonText="Registration"
				path="/login"
				linkText="login"
				isModalOpen={true}
				handleClick={handleRegister}
			/>
		</div>
	)
}