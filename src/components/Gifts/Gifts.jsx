import "./Gifts.scss";
import GiftsIcon from "./GiftsxIcon";

const Gifts = () => {
	return (
		<div className="gifts-component">
			<div className="gifts-container">
				<div>
					<GiftsIcon />
				</div>
				<div>
					<h1 className="gifts-header">¡Lluvia de sobres!</h1>
					<p className="gifts-text">
						"La lluvia de sobres es la tradicion de regalar dinero en efectivo a
						los novios en un sobre el día del evento"
					</p>
				</div>
			</div>
		</div>
	);
};

export default Gifts;
