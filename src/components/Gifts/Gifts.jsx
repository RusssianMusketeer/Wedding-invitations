import "./Gifts.scss";
import GiftsIcon from "./GiftsxIcon";
import { useTranslation } from "react-i18next";

const Gifts = ({ gifts }) => {
	const { t, i18n } = useTranslation();

	return (
		<>
			{gifts && i18n.language === "es" ? (
				<div className="gifts-component">
					<div className="gifts-container">
						<div>
							<GiftsIcon />
						</div>
						<div>
							<h1 className="gifts-header">¡Lluvia de sobres!</h1>
							<p className="gifts-text">
								"La lluvia de sobres es la tradicion de regalar dinero en
								efectivo a los novios en un sobre el día del evento"
							</p>
						</div>
						<div className="transfer-container">
							<h1 className="gifts-header-transferencia">Transferencia</h1>
							<p className="gifts-text">
								"No es necesario estar cerca, para hacer sentir el amor y el
								cariño"
								<br />
								Si asi lo prefieres puedes realizar transferencia bancaria o por
								e-transfer
							</p>
							<span className="gifts-Span">Nombre: Joselyn Judith</span>
							<span className="gifts-Span">BCP ~ cta. ahorros</span>
							<span className="gifts-Span">19132454794018</span>
							<span className="gifts-Span">CCI</span>
							<span className="gifts-Span">00219113245479401852</span>
							<span className="gifts-Span-gracias">¡ Gracias !</span>
							<p className="gifts-text">
								Te agradecemos por tu muestra de cariño y esperamos verte en
								este día tan especial.
							</p>
						</div>
					</div>
				</div>
			) : gifts ? (
				""
			) : (
				<div className="gifts-component">
					<div className="gifts-container-socials ">
						<div>
							<p className="gifts-text">{t("Share")}</p>
							<h1 className="gifts-header">{t("HashTag")}</h1>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default Gifts;
