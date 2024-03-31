import "./EndImage.scss";
import Picture from "../../Assets/Josy-Arseni.jpeg";

const EndImage = () => {
	return (
		<div className="image-end-container">
			<img
				className="image-end"
				src={Picture}></img>
		</div>
	);
};

export default EndImage;
