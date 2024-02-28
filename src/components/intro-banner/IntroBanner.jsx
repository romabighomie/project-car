import "./intro-banner.scss";
import Button from "../button/Button";

export default function IntroBanner({ title, text, img }) {
	const carImagePath = `images/${img}.webp`;
	
	return(
		<div className="intro-banner">
			
			<div className="intro-banner__body">
				<div className="intro-banner__title">
					{title}
				</div>
				
				<div className="intro-banner__text">
					{text}
				</div>
				
			</div>
			
			<img className="intro-banner__image-car" src={carImagePath}  alt="" />
		</div>
	)
}