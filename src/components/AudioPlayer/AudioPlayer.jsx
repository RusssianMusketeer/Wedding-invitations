import {
	MediaController,
	MediaControlBar,
	MediaTimeRange,
	MediaTimeDisplay,
	MediaVolumeRange,
	MediaPlayButton,
	MediaSeekBackwardButton,
	MediaSeekForwardButton,
	MediaMuteButton,
} from "media-chrome/dist/react";
import Music from "../../Assets/music.mp3";

const AudioPlayer = () => {
	return (
		<MediaController>
			<audio
				slot="media"
				src={Music}></audio>
			<MediaControlBar>
				<MediaPlayButton></MediaPlayButton>
				<MediaSeekBackwardButton></MediaSeekBackwardButton>
				<MediaSeekForwardButton></MediaSeekForwardButton>
				<MediaTimeRange></MediaTimeRange>
				<MediaTimeDisplay showDuration></MediaTimeDisplay>
				<MediaMuteButton></MediaMuteButton>
				<MediaVolumeRange></MediaVolumeRange>
			</MediaControlBar>
		</MediaController>
	);
};

export default AudioPlayer;
