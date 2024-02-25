import "./profile.scss";
import useAuth from "../../hooks/useAuth";
import {removeUser} from "../../store/slices/userSlice";
import {useDispatch} from "react-redux";

export default function ProfilePage() {
	const {email} = useAuth();
	const dispatch = useDispatch();
	
	return(
		<>
			<h1>Profile Page</h1>
			<br/>
			<div>Welcome, {email}</div>
			<button onClick={() => dispatch(removeUser())}>
				Log out
			</button>
		</>
	)
}