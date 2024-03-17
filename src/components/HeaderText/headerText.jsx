import "./headerText.scss";

const HeaderText = ({ text, title }) => {
	return (
		<div className={`Header-Text ${title ? "parents-display" : ""}`}>
			<h1 className="title">{title}</h1>
			{text ? <p className="text">{text}</p> : ""}
			{title ? (
				<div className="parents-text">
					<div>
						<h3>Novia</h3>
						<span>Rosa Agripina Huaman Chara</span>
					</div>
					<div>
						<h3>Novio</h3>
						<div className="names-section">
							<span>Andrei Dmitriev</span>
							<span>Svetlana Dmitrieva</span>
						</div>
					</div>
				</div>
			) : (
				""
			)}
		</div>
	);
};

export default HeaderText;
