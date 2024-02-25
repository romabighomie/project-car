import "./home.scss";
import IntroBanner from "../../components/intro-banner/IntroBanner";
import useBannerApi from "../../hooks/useBannerApi";

export default function HomePage() {
	const {data, loading, error} = useBannerApi();
	
	return(
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
			</div>
		</div>
	)
}