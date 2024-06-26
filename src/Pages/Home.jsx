import "./Home.scss";
import portrait from "../Assets/portrait.jpeg";
import HeaderText from "../components/HeaderText/headerText";
import CarouselImages from "../components/Carousel/carousel";
import DateCountdown from "../components/DateCountdown/DateCountdown";
import CeremonyMap from "../components/CeremonyMap/CeremonyMap";
import Gifts from "../components/Gifts/Gifts";
import DressCode from "../components/DressCode/DressCode";
import Invitation from "../components/Invitation/Invitation";
import Form from "../components/Form/Form";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import PlayPause from "../components/PlayPause/PlayPause";
import Logo2 from "../Assets/Logo2.png";
import Gratitude from "../components/WordofGratitude/Gratitude";

const Home = () => {
	const { t, i18n } = useTranslation();
	const { lang } = useParams();
	i18n.changeLanguage(lang);
	console.log(lang, "yess")
	return (
		<div className="App">
			<div className="App-header">
				<div className="sub-Header">
					<div className="header-section">
						<div className="icon">
							<img
								className="icon-image"
								alt="photo2"
								src={Logo2}></img>
						</div>
						<h1 className="header-name">
							Joselyn <span>&</span> Arseni
						</h1>

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
				<CarouselImages carouselBoolean={true} />
				<DateCountdown />
				<HeaderText title={t("Fathers bleesing")} />
				<Gratitude />
				<CeremonyMap />
				<Gifts gifts={true} />
				<DressCode />
				<Invitation />
				<Form />
				<CarouselImages carouselBoolean={false} />
				<Gifts gifts={false} />
			</div>
		</div>
	);
};

export default Home;
