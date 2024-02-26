import {Outlet} from "react-router-dom";
import Header from "../components/header/Header";
import {useDispatch} from "react-redux";
import {useEffect} from "react";
import {setUser} from "../store/slices/userSlice";
import Footer from "../components/footer/Footer";

export default function Layout() {
	const dispatch = useDispatch();
	
	useEffect(() => {
		const storedUser = localStorage.getItem('user');
		if (storedUser) {
			const user = JSON.parse(storedUser);
			dispatch(setUser(user));
		}
	}, [dispatch]);
	
	return(
		<div className="page">
			
			<Header />
			
			<main className="main">
				<Outlet />
			</main>
			
			<Footer />
			
		</div>
	)
}