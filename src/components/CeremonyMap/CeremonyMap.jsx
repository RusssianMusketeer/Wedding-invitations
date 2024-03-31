import "./CeremonyMap.scss";
import Icon from "./Icon";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import CeremonyIcon from "./CeremonyIcon";
import StreamIcon from "./StreamIcon";

const CeremonyMap = () => {
	const control = useAnimation();
	const [ref, inView] = useInView();
	const boxVariant = {
		visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
		hidden: { opacity: 0 },
	};
	const handleClick = (url) => {
		window.open(url, "_blank", "noreferrer");
	};

	useEffect(() => {
		if (inView) {
			control.start("visible");
		}
	}, [control, inView]);
	return (
		<div className="CeremonyMap">
			<motion.div
				ref={ref}
				animate={control}
				variants={boxVariant}
				initial={{ opacity: 0, y: "100%" }}>
				<div className="recepcion-section">
					<div className="recepcion-sub-section">
						<div className="reception-container">
							<div className="reception-column">
								<CeremonyIcon />
								<h1 className="reception-header">Ceremonia</h1>
								<span className="reception-time">27 de Julio </span>
								<span className="reception-time">11:00 am</span>
								<span className="reception-cater">Mona salehi notaire</span>
								<span className="reception-adresse">
									1602B Avenue Selkirk, Montréal, Quebec
								</span>
								<span className="reception-adresse">Canada QC H3H 1C6</span>
							</div>
							<div>
								<button
									target="_blank"
									className="reception-button"
									onClick={() =>
										handleClick(
											"https://www.google.com/maps/place/1602A+Av.+Selkirk,+Montr%C3%A9al,+QC+H3H+1C6/@45.496355,-73.5829755,16z/data=!3m1!4b1!4m6!3m5!1s0x4cc91a152c50a945:0xc246836f960198e!8m2!3d45.496355!4d-73.5829755!16s%2Fg%2F11c5cp6tvc?entry=ttu"
										)
									}>
									Ver Mapa
								</button>
							</div>
						</div>
						<div className="reception-container">
							<div className="reception-video">
								<div>
									<StreamIcon />
								</div>
								<h1 className="reception-header">
									Streaming <br />
									Ceremonia
								</h1>
								<span className="reception-time">27 de Julio </span>
								<span className="reception-time">11:00 am</span>
								<span className="reception-adresse">
									La transmisión del video estará disponible a partir de julio.
								</span>
								<div className="container-button">
									<button
										target="_blank"
										className="reception-button-video">
										Ver en directo
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="recepcion-sub-section">
						<div className="reception-container">
							<Icon />
							<div className="reception-column">
								<h1 className="reception-header">Recepción</h1>
								<span className="reception-time">10 de Agosto</span>
								<span className="reception-time">5:00 pm</span>
								<span className="reception-cater">
									Nacatita eventos & catering
								</span>
								<span className="reception-adresse">
									Av.Acapulco N 879 Urb el sol de la Molina
								</span>
								<span className="reception-adresse">La Molina - Lima</span>
							</div>
							<div>
								<button
									target="_blank"
									className="reception-button"
									onClick={() =>
										handleClick(
											"https://www.google.com/maps/place/C.+Acapulco+879,+La+Molina+15026,+Peru/@-12.0813927,-76.899599,17z/data=!4m6!3m5!1s0x9105c1150d0958ad:0x3d97b6548910f4af!8m2!3d-12.081036!4d-76.8986225!16s%2Fg%2F11y2ymnm8l?entry=ttu"
										)
									}>
									Ver Mapa
								</button>
							</div>
						</div>
						<div className="reception-container">
							<div className="reception-video">
								<div>
									<StreamIcon />
								</div>
								<h1 className="reception-header">
									Streaming <br />
									Recepcion
								</h1>
								<span className="reception-time">10 de Agosto</span>
								<span className="reception-time">5:00 pm</span>
								<span className="reception-adresse">
									La transmisión de video estará disponible a partir de Agosto.
								</span>
								<div className="container-button">
									<button
										target="_blank"
										className="reception-button-video">
										Ver en directo
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
		</div>
	);
};

export default CeremonyMap;
