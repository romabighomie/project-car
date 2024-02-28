import "./favorites.scss";
import Card from "../../components/card/Card";
import {useSelector} from "react-redux";

export default function FavoritesPage() {
	const favorites = useSelector((state) => state.favorites.items);
	
	return(
		<div>
			<div className="container">
				<h1 >Favorites Page</h1>
				<br/>
				<br/>
				<br/>
				
				<div className="home__cards-wrapper">
					{favorites.map(item => (
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
						/>
					))}
				</div>
			</div>
		</div>
	)
}