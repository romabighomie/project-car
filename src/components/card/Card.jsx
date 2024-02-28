import "./card.scss";
import Button from "../button/Button";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faChargingStation, faGasPump, faGear, faHeart, faPalette} from "@fortawesome/free-solid-svg-icons";
import {faHeart as faHeartRegular} from "@fortawesome/free-regular-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {toggleFavorite} from "../../store/slices/favoritesSlice";
import useAuth from "../../hooks/useAuth";

export default function Card({ id, title, subtitle, img, fuel, gearbox, color, price, item, handleClick }) {
	const carImagePath = `images/${img}.webp`;
	const {isAuth} = useAuth();
	
	const dispatch = useDispatch();
	
	const favorites = useSelector((state) => state.favorites.items);
	const isFavorite = favorites.some((item) => item.id === id);
	
	const handleToggleFavorites = (item) => {
		dispatch(toggleFavorite(item));
	}
	
	return(
		<div className="card">
			
			{isAuth &&
				<button className="card__favorites" onClick={() => handleToggleFavorites(item)}>
					<FontAwesomeIcon icon={isFavorite ? faHeart : faHeartRegular} />
				</button>
			}
			
			<div className="card__header">
				<div className="card__title">{title}</div>
				<div className="card__subtitle">{subtitle}</div>
			</div>
			
			<img className="card__image" src={carImagePath} alt="" />
			
			<div className="card__info">
				<div className="card__features">
					<FontAwesomeIcon icon={fuel === 'Electric' ? faChargingStation : faGasPump} />
					{fuel}
				</div>
				<div className="card__features">
					<FontAwesomeIcon icon={faGear} />
					{gearbox}
				</div>
				<div className="card__features">
					<FontAwesomeIcon icon={faPalette} />
					{color}
				</div>
			</div>
			
			<div className="card__footer">
				<div className="card__price">€{price}</div>
				<div className="card__button">
					<Button
						type="button"
						text="Buy Car"
						color="blue"
						onClick={handleClick}
					/>
				</div>
			</div>

		</div>
	)
}