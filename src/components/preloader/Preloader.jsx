import "./preloader.scss";
import {createPortal} from "react-dom";
import {ReactComponent as IconPreloader} from "./../../assets/svg/preloader.svg";

export default function Preloader() {
	const preloaderRoot = document.getElementById('preloader');
	
	return createPortal(
		
		<div className="preloader">
			<IconPreloader className="preloader__icon" />
		</div>
		
		,preloaderRoot
	);
}