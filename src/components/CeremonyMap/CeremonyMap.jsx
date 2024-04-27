import "./CeremonyMap.scss";
import Icon from "./Icon";
import CeremonyIcon from "./CeremonyIcon";
import StreamIcon from "./StreamIcon";
import foodIcon from "../../Assets/food.svg";
import seperatorRight from "../../Assets/seperator.webp";
import seperatorLeft from "../../Assets/separador dorado_edited-2.webp";
import { useTranslation } from "react-i18next";

const CeremonyMap = () => {
	const handleClick = (url) => {
		window.open(url, "_blank", "noreferrer");
	};
	const { t } = useTranslation();

	return (
		<div className="CeremonyMap">
			<div className="recepcion-section">
				<div className="recepcion-sub-section">
					<div className="reception-container">
						<div className="reception-column">
							<CeremonyIcon />
							<h1 className="reception-header">{t("Ceremony")}</h1>
							<span className="reception-time">{t("27 July")}</span>
							<span className="reception-time">11:00 am</span>
							<span className="reception-cater">{t("Canada Time")}</span>
							<span className="reception-cater">Mona salehi notaire</span>
							<span className="reception-adresse">
								1602B Avenue Selkirk, Montréal, Quebec
							</span>
							<span className="reception-adresse">Canada QC H3H 1C6</span>
						</div>
						<div>
							<button
								target="_blank"
								className="reception-button"
								onClick={() =>
									handleClick(
										"https://www.google.com/maps/place/1602A+Av.+Selkirk,+Montr%C3%A9al,+QC+H3H+1C6/@45.496355,-73.5829755,16z/data=!3m1!4b1!4m6!3m5!1s0x4cc91a152c50a945:0xc246836f960198e!8m2!3d45.496355!4d-73.5829755!16s%2Fg%2F11c5cp6tvc?entry=ttu"
									)
								}>
								{t("See location")}
							</button>
						</div>
					</div>
					<div className="reception-container">
						<div className="reception-video">
							<div>
								<StreamIcon />
							</div>
							<h1 className="reception-header">{t("Streaming Ceremony")}</h1>
							<span className="reception-time">{t("27 July")}</span>
							<span className="reception-time">11:00 am</span>
							<span className="reception-cater">{t("Canada Time")}</span>
							<span className="reception-adresse">
								{t("Streaming Ceremony text")}
							</span>
							<div className="container-button">
								<button
									target="_blank"
									className="reception-button-video">
									{t("See Live")}
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="recepcion-sub-section">
					<div className="reception-container">
						<div className="reception-column">
							<img
								className="foodIcon"
								src={foodIcon}
								alt="foodIcon"
							/>
							<h1 className="reception-header">{t("Restaurant")}</h1>
							<span className="reception-time">{t("27 July")}</span>
							<span className="reception-time">1:00 pm</span>
							<span className="reception-cater">{t("Canada Time")}</span>
							<span className="reception-adresse">
								2146 Rue Lucien-Thimens, Montréal, Quebec
							</span>
							<span className="reception-adresse">
								Saint-Laurent, QC H4R 1L1
							</span>
						</div>
						<div>
							<button
								target="_blank"
								className="reception-button"
								onClick={() =>
									handleClick(
										"https://www.google.com/maps/place/Kavkaz/@45.5091576,-73.6972161,17z/data=!3m1!4b1!4m6!3m5!1s0x4cc919738fc92bbf:0xa4e90d6cd83eb60d!8m2!3d45.5091576!4d-73.6946412!16s%2Fg%2F11rkf7zhm5?entry=ttu"
									)
								}>
								{t("See location")}
							</button>
						</div>
					</div>
				</div>
				<div className="Invitation-Icon-container">
					<img
						className="Invitation-Icon"
						src={seperatorRight}
						alt=""
					/>
					<img
						className="Invitation-Icon"
						src={seperatorLeft}
						alt=""
					/>
				</div>
				<div className="recepcion-sub-section">
					<div className="reception-container">
						<Icon />
						<div className="reception-column">
							<h1 className="reception-header">{t("Reception")}</h1>
							<span className="reception-time">{t("10 august")}</span>
							<span className="reception-time">5:00 pm</span>
							<span className="reception-cater">{t("Peru Time")}</span>
							<span className="reception-cater">
								Nacatita eventos & catering
							</span>
							<span className="reception-adresse">
								Av.Acapulco N 879 Urb el sol de la Molina
							</span>
							<span className="reception-adresse">La Molina - Lima</span>
						</div>
						<div>
							<button
								target="_blank"
								className="reception-button"
								onClick={() =>
									handleClick(
										"https://www.google.com/maps/place/C.+Acapulco+879,+La+Molina+15026,+Peru/@-12.0813927,-76.899599,17z/data=!4m6!3m5!1s0x9105c1150d0958ad:0x3d97b6548910f4af!8m2!3d-12.081036!4d-76.8986225!16s%2Fg%2F11y2ymnm8l?entry=ttu"
									)
								}>
								{t("See location")}
							</button>
						</div>
					</div>
					<div className="reception-container">
						<div className="reception-video">
							<div>
								<StreamIcon />
							</div>
							<h1 className="reception-header">{t("Streaming Reception")}</h1>
							<span className="reception-time">{t("10 august")}</span>
							<span className="reception-time">5:00 pm</span>
							<span className="reception-cater">{t("Peru Time")}</span>
							<span className="reception-adresse">
								{t("Streaming Ceremony text")}
							</span>
							<div className="container-button">
								<button
									target="_blank"
									className="reception-button-video">
									{t("See Live")}
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CeremonyMap;
