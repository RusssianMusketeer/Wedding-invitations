import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import image1 from "../../Assets/image-1.jpeg";
import image3 from "../../Assets/image-3.webp";
import image4 from "../../Assets/image-4.jpeg";
import image2 from "../../Assets/image-2.jpeg";
import image5 from "../../Assets/mona2.jpg";
import image6 from "../../Assets/mona1.jpg";
import image7 from "../../Assets/image-7.jpeg";
import image8 from "../../Assets/image-8.jpeg";
import image9 from "../../Assets/image-9.jpeg";
import "../Carousel/carousel.scss";

const Fade = ({ carouselBoolean }) => {
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
		<>
			{carouselBoolean ? (
				<div className="slider-container">
					<Slider {...settings}>
						<div>
							<img
								alt="image1"
								className="images"
								src={image1}
							/>
						</div>

						<div>
							<img
								alt="image6"
								className="images"
								src={image6}
							/>
						</div>
						<div>
							<img
								alt="image3"
								className="images"
								src={image3}
							/>
						</div>
						<div>
							<img
								alt="image4"
								className="images"
								src={image4}
							/>
						</div>
						<div>
							<img
								alt="image5"
								className="images"
								src={image5}
							/>
						</div>
					</Slider>
				</div>
			) : (
				<div className="slider-container-second">
					<Slider {...settings}>
						<div>
							<img
								alt="image7"
								className="images"
								src={image7}
							/>
						</div>
						<div>
							<img
								alt="image8"
								className="images"
								src={image8}
							/>
						</div>
						<div>
							<img
								alt="image2"
								className="images"
								src={image2}
							/>
						</div>
						<div>
							<img
								alt="image9"
								className="images"
								src={image9}
							/>
						</div>
					</Slider>
				</div>
			)}
		</>
	);
};

export default Fade;
