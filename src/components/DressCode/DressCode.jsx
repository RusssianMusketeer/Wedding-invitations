import "./DressCode.scss";
import DressCodeIcon from "./DressCodeIcon";

const DressCode = () => {
	return (
		<div className="DressCode-component">
			<div className="DressCode-container">
                <div>
				<DressCodeIcon />
                </div>
				<h1 className="DressCode-header">Código de Vestimenta</h1>
				<span className="DressCode-text">Formal</span>
			</div>
		</div>
	);
};

export default DressCode;
