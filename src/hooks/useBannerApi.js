import {useEffect, useState} from "react";
import axios from "axios";

export default function useBannerApi() {
	const [data, setData] = useState([]);
	const [loading, setLoading] = useState(true);
	
	useEffect(() => {
		const fetchBannerData = async () => {
			try {
				const response = await axios.get('https://65db52f53ea883a152918606.mockapi.io/api/v1/banner');
				setData(response.data);
			}
			catch (error) {
				console.log(error);
			}
			finally {
				setLoading(false);
			}
		};
		
		fetchBannerData();
	}, []);
	
	return {data, loading}
}
