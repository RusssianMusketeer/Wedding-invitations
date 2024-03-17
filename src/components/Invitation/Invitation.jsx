import "./Invitation.scss";
import seperatorRight from "../../Assets/seperator.webp";
import seperatorLeft from "../../Assets/separador dorado_edited-2.webp";

const Invitation = () => {
	return (
		<div className="Invitation-component">
			<div>
				<div>
					<h1 className="Invitation-header">Niños</h1>
					<span className="Invitation-text">Buenas noches</span>
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
