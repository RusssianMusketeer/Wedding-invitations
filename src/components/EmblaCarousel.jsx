import React from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";

const EmblaCarousel = (props) => {
	const { slides, options } = props;
	const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);

	return (
		<section className="embla">
			<div
				className="embla__viewport"
				ref={emblaRef}>
				<div className="embla__container">
					{slides.map((element, index) => (
						<div
							className="embla__slide"
							key={index}>
							<div className="embla__slide__number">
								<img
									className="image"
									src={element}></img>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default EmblaCarousel;
