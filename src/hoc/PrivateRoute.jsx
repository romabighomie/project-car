import useAuth from "../hooks/useAuth";
import {Navigate} from "react-router-dom";

export default function PrivateRoute({ children }) {
	const {isAuth} = useAuth();

	if (!isAuth) {
		return <Navigate to='/'/>
	}
	
	return children;
}