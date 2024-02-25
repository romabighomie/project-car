import "./button.scss";

export default function Button({ type, text, color, onClick }) {
	
	return(
		<button
			className={`button button--${color}`}
			type={type}
			onClick={onClick}
		>
			{ text }
		</button>
	)
}