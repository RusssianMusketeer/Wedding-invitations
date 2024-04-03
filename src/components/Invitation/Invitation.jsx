import "./Invitation.scss";
import seperatorRight from "../../Assets/seperator.webp";
import seperatorLeft from "../../Assets/separador dorado_edited-2.webp";
import KidsIcon from "./KidsIcon";
import { useTranslation } from "react-i18next";

const Invitation = () => {
	const { t } = useTranslation();
	return (
		<div className="Invitation-component">
			<div>
				<div>
					<h1 className="Invitation-header">{t("Respect")}</h1>
					<div className="flex-kids">
						<span className="Invitation-text">{t("No kids")}</span>
						<KidsIcon />
					</div>
					<div className="container-pass">
						<h1>{t("Pass")}</h1>
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

					<h1 className="Invitation-header">{t("Confirm")}</h1>
				</div>
			</div>
		</div>
	);
};

export default Invitation;
