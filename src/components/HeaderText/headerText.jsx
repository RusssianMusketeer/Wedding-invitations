import "./headerText.scss";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const HeaderText = ({ text, title }) => {
	const control = useAnimation();
	const [ref, inView] = useInView();
	const boxVariant = {
		visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
		hidden: { opacity: 0 },
	};
	const { t } = useTranslation();

	useEffect(() => {
		if (inView) {
			control.start("visible");
		}
	}, [control, inView]);
	return (
		<div className={`Header-Text ${title ? "parents-display" : ""}`}>
			<motion.div
				ref={ref}
				animate={control}
				variants={boxVariant}
				initial={{ opacity: 0, y: "100%" }}>
				<h1 className="title">{title}</h1>
				{text ? <p className="text">{text}</p> : ""}
				{title ? (
					<div className="parents-text">
						<div>
							<h3>{t("Girlfriend")}</h3>
							<span>Rosa Agripina Huaman Chara</span>
						</div>
						<div>
							<h3>{t("Boyfriend")}</h3>
							<div className="names-section">
								<span>Andrei Dmitriev</span>
								<span>Svetlana Dmitrieva</span>
							</div>
						</div>
					</div>
				) : (
					""
				)}
			</motion.div>
		</div>
	);
};

export default HeaderText;
