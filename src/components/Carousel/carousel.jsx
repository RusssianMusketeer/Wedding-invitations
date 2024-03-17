import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../Assets/image-1.jpeg";
import image2 from "../../Assets/image-2.jpg";
import image3 from "../../Assets/image-3.webp";
import image4 from "../../Assets/image-4.jpeg";

import "../Carousel/carousel.scss";

const Fade = () => {
	const settings = {
		dots: false,
		fade: true,
		infinite: true,
		speed: 1000,
		autoplaySpeed: 5000,
		autoplay: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		waitForAnimate: false,
		pauseOnDotsHover: false,
		pauseOnFocus: false,
		pauseOnHover: false,
	};
	return (
		<div className="slider-container">
			<Slider {...settings}>
				<div>
					<img
						className="images"
						src={image1}
					/>
				</div>
				<div>
					<img
						className="images"
						src={image2}
					/>
				</div>
				<div>
					<img
						className="images"
						src={image3}
					/>
				</div>
				<div>
					<img
						className="images"
						src={image4}
					/>
				</div>
			</Slider>
		</div>
	);
};

export default Fade;
