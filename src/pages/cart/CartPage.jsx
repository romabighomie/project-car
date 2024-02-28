import {useDispatch, useSelector} from "react-redux";
import "./cart.scss";
import Button from "../../components/button/Button";
import {removeFromCart} from "../../store/slices/cartSlice";
import {setIsConfirm} from "../../store/slices/confrimSlice";

export default function CartPage() {
	const cartItems = useSelector((state) => state.cart.items);
	const isConfirm = useSelector((state) => state.confirm.isConfirm);
	
	const dispatch = useDispatch();
	
	const handleRemove = (item) => {
		dispatch(removeFromCart(item));
		console.log(item)
	}
	
	const handleConfirm = () => {
		dispatch(setIsConfirm(true));
	}
	
	return(
		<div className="cart">
			<div className="container">
				<h1>Cart</h1>
				
				<br/>
				<br/>
				<br/>
				
				<div className="cart__wrapper">
					{cartItems.map(item => (
						<div className={isConfirm ? "cart__item cart__item--confirm" : "cart__item"} key={item.id}>
							
							<img src={`images/${item.img}.webp`} alt="" />
							
							<div className="cart__title-wrapper">
								<div>{item.title}</div>
								<div>{item.subtitle}</div>
							</div>
							
							{!isConfirm &&
								<div className="cart__btn-wrapper">
									<div className="cart__buy">
										<div className="cart__price">€{item.price}</div>
										<Button
											type="button"
											text="Confirm"
											color="green"
											onClick={handleConfirm}
										/>
									</div>
									
									<Button
										type="button"
										text="Remove"
										color="red"
										onClick={() => handleRemove(item)}
									/>
								</div>
							}
						</div>
					))}
				</div>
				
			</div>
		</div>
	)
}