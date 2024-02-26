import {useEffect, useState} from "react";
import axios from "axios";

export default function useCardApi() {
	const [cardData, setCarDData] = useState([]);
	const [loading, setLoading] = useState(true);
	
	useEffect(() => {
		const fetchCardData = async () => {
			try {
				const response = await axios.get('https://65db52f53ea883a152918606.mockapi.io/api/v1/card');
				setCarDData(response.data);
			}
			catch (error) {
				console.log(error);
			}
			finally {
				setTimeout(() => {
					setLoading(false);
				}, 500)
			}
		};
		
		fetchCardData();
	}, []);
	
	return {cardData, loading}
}
