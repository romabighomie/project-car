import {useDispatch} from "react-redux";
import {setUser} from "store/slices/userSlice"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import ModalAuth from "../ModalAuth";

export default function Login({ isModalOpen, setIsModalOpen }) {
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
				console.log(user);
			})
			.catch(console.error)
	}
	
	return(
		<ModalAuth
			title="Login"
			buttonText="Sign in"
			linkText="registration"
			handleClick={handleLogin}
			isModalOpen={isModalOpen}
			setIsModalOpen={setIsModalOpen}
		/>
	)
}