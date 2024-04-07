import "./Home.scss";
import portrait from "../Assets/portrait.jpeg";

import HeaderText from "../components/HeaderText/headerText";

import Icon from "../components/icon";
import CarouselImages from "../components/Carousel/carousel";
import DateCountdown from "../components/DateCountdown/DateCountdown";
import CeremonyMap from "../components/CeremonyMap/CeremonyMap";
import Gifts from "../components/Gifts/Gifts";
import DressCode from "../components/DressCode/DressCode";
import Invitation from "../components/Invitation/Invitation";
import Form from "../components/Form/Form";
import EndImage from "../components/EndImage/EndImage";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import PlayPause from "../components/PlayPause/PlayPause";

const Home = () => {
	const { t, i18n } = useTranslation();
	const { lang } = useParams();
	i18n.changeLanguage(lang);
	console.log(lang,process.env.PUBLIC_URL);
	return (
		<div className="App">
			<div className="App-header">
				<div className="sub-Header">
					<div className="header-section">
						<div className="icon">
							<Icon />
						</div>
						<h1 className="header-name">Arseni & Joselyn</h1>

						<PlayPause />
					</div>
				</div>
				<div className="background">
					<img
						alt="portrait"
						className="portrait"
						src={portrait}></img>
				</div>
				<HeaderText text={t("Header")} />
				<CarouselImages />
				<DateCountdown />
				<HeaderText title={t("Fathers bleesing")} />
				<CeremonyMap />
				<Gifts gifts={true} />
				<DressCode />
				<Invitation />
				<Form />
				<EndImage />
				<Gifts gifts={false} />
			</div>
		</div>
	);
};

export default Home;
