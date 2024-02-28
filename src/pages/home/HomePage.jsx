import "./home.scss";
import IntroBanner from "../../components/intro-banner/IntroBanner";
import useBannerApi from "../../hooks/useBannerApi";
import Preloader from "../../components/preloader/Preloader";
import Card from "../../components/card/Card";
import useCardApi from "../../hooks/useCardApi";
import useAuth from "../../hooks/useAuth";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import Login from "../../components/modal-auth/login/Login";
import Registration from "../../components/modal-auth/registration/Registration";
import {useDispatch} from "react-redux";
import {addToCart} from "../../store/slices/cartSlice";

export default function HomePage() {
	const {data, loading} = useBannerApi();
	const {cardData} = useCardApi();
	const dispatch = useDispatch();
	
	const {isAuth} = useAuth();
	const navigate = useNavigate();
	const [isModalOpenLogin, setIsModalOpenLogin] = useState(false);
	const [isModalOpenRegistration, setIsModalOpenRegistration] = useState(false);
	
	const handleClick = (item) => {
		const storedUser = localStorage.getItem('lastUser');
		
		if(isAuth) {
			dispatch(addToCart(item));
			navigate('/cart');
		}
		
		if (storedUser) {
			setIsModalOpenLogin(true);
		} else {
			setIsModalOpenRegistration(true);
		}
	}
	
	if(loading) {
		return <Preloader />
	}
	
	return(
		<>
			<div className="container">
				
				<h1>Home Page</h1>
				<br/>
				<br/>
				
				<div className="home">
					<div className="home__intro">
						{data.map(item => (
							<IntroBanner
								key={item.id}
								title={item.title}
								text={item.text}
								img={item.img}
							/>
						))}
					</div>
					
					<div className="home__cards">
						<div className="home__title">
							Popular
						</div>
						<div className="home__cards-wrapper">
							{cardData.map(item => (
								<Card
									id={item.id}
									key={item.id}
									title={item.title}
									subtitle={item.subtitle}
									img={item.img}
									fuel={item.fuel}
									gearbox={item.gearbox}
									color={item.color}
									price={item.price}
									item={item}
									handleClick={() => handleClick(item)}
								/>
							))}
						</div>
					</div>
				</div>
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