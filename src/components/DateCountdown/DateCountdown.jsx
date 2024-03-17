import "./DateCountdown.scss";
import { useCountdown } from "../../Utils/useCountdown";
import seperator from "../../Assets/seperator.webp";

const DateCountdown = () => {
	const [days, hours, minutes, seconds] = useCountdown();
	const dateObject = {
		D: days,
		H: hours,
		M: minutes,
		S: seconds,
	};
	return (
		<>
			<div>
				<p className="date-text">10 de Agosto 2024</p>
				<h1 className="header-wedding">Nuestra Boda</h1>
			</div>
			<div className="wrapper-date-countdown">
				{Object.keys(dateObject).map((element, index) => (
					<div key={index}>
						<div>
							<div className="date-containers">
								<span className="date-containers-values">{element}</span>
							</div>
							<div className="date-containers">
								<span className="date-containers-values">
									{dateObject[element]}
								</span>
							</div>
						</div>
					</div>
				))}
			</div>
			<div>
				<img
					className="seperator"
					src={seperator}
					alt=""
				/>
			</div>
		</>
	);
};

export default DateCountdown;
