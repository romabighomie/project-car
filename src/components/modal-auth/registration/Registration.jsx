import {useDispatch} from "react-redux";
import {setUser} from "store/slices/userSlice"
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import ModalAuth from "../ModalAuth";

export default function Registration({ isModalOpen, setIsModalOpen }) {
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
				console.log(user);
			})
			.catch(console.error)
	}

	return(
		<ModalAuth
			title="Registration"
			buttonText="Registration"
			linkText="login"
			handleClick={handleRegister}
			isModalOpen={isModalOpen}
			setIsModalOpen={setIsModalOpen}
		/>
	)
}