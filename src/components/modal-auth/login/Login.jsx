import {useDispatch} from "react-redux";
import {setUser} from "store/slices/userSlice"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import ModalAuth from "../ModalAuth";

export default function Login({ onLoginSuccess }) {
	const dispatch = useDispatch();
	
	const handleLogin = (email, password) => {
		const auth = getAuth();
		signInWithEmailAndPassword(auth, email, password)
			.then(({user}) => {
				dispatch(setUser({
					email: user.email,
					id: user.uid,
					token: user.accessToken,
				}))
				onLoginSuccess();
				console.log(user);
			})
			.catch(console.error)
	}
	
	return(
		<div>
			<ModalAuth
				title="Login"
				buttonText="Sign in"
				path="/register"
				linkText="registration"
				handleClick={handleLogin}
			/>
		</div>
	)
}