import "./EndImage.scss";
import Picture from "../../Assets/Josy-Arseni.jpeg";

const EndImage = () => {
	return (
		<div className="image-end-container">
			<img
				alt="happy-Couple"
				className="image-end"
				src={Picture}></img>
		</div>
	);
};

export default EndImage;
