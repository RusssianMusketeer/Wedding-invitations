import "./DateCountdown.scss";
import { useCountdown } from "../../Utils/useCountdown";
import seperator from "../../Assets/seperator.webp";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const DateCountdown = () => {
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
	const [days, hours, minutes, seconds] = useCountdown();
	const dateObject = {
		D: days,
		H: hours,
		M: minutes,
		S: seconds,
	};

	return (
		<>
			<motion.div
				ref={ref}
				animate={control}
				variants={boxVariant}
				initial={{ opacity: 0, y: "100%" }}>
				<div>
					<p className="date-text">27 de Julio 2024</p>
					<h1 className="header-wedding">Nuestra Boda</h1>
				</div>
				<div className="wrapper-date-countdown">
					{Object.keys(dateObject).map((element, index) => (
						<div key={index}>
							<div>
								<div className="date-containers">
									<span className="date-containers-values">{element}</span>
								</div>
								<div className="date-containers">
									<span className="date-containers-values">
										{dateObject[element]}
									</span>
								</div>
							</div>
						</div>
					))}
				</div>
				<div>
					<img
						className="seperator"
						src={seperator}
						alt=""
					/>
				</div>
			</motion.div>
		</>
	);
};

export default DateCountdown;
