import "./DressCode.scss";
import DressCodeIcon from "./DressCodeIcon";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

const DressCode = () => {
	const control = useAnimation();
	const [ref, inView] = useInView();
	const boxVariant = {
		visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
		hidden: { opacity: 0 },
	};

	useEffect(() => {
		if (inView) {
			control.start("visible");
		}
	});
	const { t } = useTranslation();
	return (
		<div className="DressCode-component">
			<motion.div
				ref={ref}
				animate={control}
				variants={boxVariant}
				initial={{ opacity: 0, y: "100%" }}>
				<div className="DressCode-container">
					<div>
						<DressCodeIcon />
					</div>
					<h1 className="DressCode-header">{t("Clothes")}</h1>
					<span className="DressCode-text">Formal</span>
				</div>
			</motion.div>
		</div>
	);
};

export default DressCode;
