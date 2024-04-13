import "./DateCountdown.scss";
import { useCountdown } from "../../Utils/useCountdown";
import seperator from "../../Assets/seperator.webp";
import { useTranslation } from "react-i18next";

const DateCountdown = () => {
	const [days, hours, minutes, seconds] = useCountdown();
	const dateObject = {
		D: days,
		H: hours,
		M: minutes,
		S: seconds,
	};
	const { t } = useTranslation();

	return (
		<>
			<div>
				<p className="date-text">{t("Saturday 27 July")}</p>
				<h1 className="header-wedding">{t("Our Wedding")}</h1>
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
