import "./CeremonyMap.scss";
import Icon from "./Icon";

const CeremonyMap = () => {
	const handleClick = (url) => {
		window.open(url, "_blank", "noreferrer");
	};
	return (
		<div className="CeremonyMap">
			<div>
				<Icon />
				<div className="reception-container">
					<h1 className="reception-header">Recepción</h1>
					<span className="reception-time">5:00pm</span>
					<span className="reception-cater">Nacatita eventos & catering</span>
					<span className="reception-adresse">
						Av.Acapulco N 879 Urb el sol de la Molina - La Molina - Lima
					</span>
					<div>
						<button
							target="_blank"
							className="reception-button"
							onClick={() =>
								handleClick(
									"https://www.google.com/maps/place/C.+Acapulco+879,+La+Molina+15026,+Peru/@-12.0813927,-76.899599,17z/data=!4m6!3m5!1s0x9105c1150d0958ad:0x3d97b6548910f4af!8m2!3d-12.081036!4d-76.8986225!16s%2Fg%2F11y2ymnm8l?entry=ttu"
								)
							}>
							Ver Mapa
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CeremonyMap;
