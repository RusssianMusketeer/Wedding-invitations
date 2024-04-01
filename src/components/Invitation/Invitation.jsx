import "./Invitation.scss";
import seperatorRight from "../../Assets/seperator.webp";
import seperatorLeft from "../../Assets/separador dorado_edited-2.webp";
import KidsIcon from "./KidsIcon";

const Invitation = () => {
	return (
		<div className="Invitation-component">
			<div>
				<div>
					<h1 className="Invitation-header">Respetuosamente</h1>
					<div className="flex-kids">
						<span className="Invitation-text">Sin niños</span>
						<KidsIcon />
					</div>
					<div className="container-pass">
						<h1>Pase por 1 personna</h1>
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

					<h1 className="Invitation-header">Confirma tu Asistencia</h1>
				</div>
			</div>
		</div>
	);
};

export default Invitation;
