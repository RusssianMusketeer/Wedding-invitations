import "./App.scss";
import portrait from "./portrait.jpeg";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import Music from "./music.mp3";

const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<div className="sub-Header">
					<div>
						<h1 className="header-name">Arseni y Joselyn</h1>
					</div>
					<AudioPlayer
						autoPlay={true}
						loop={true}
						src={Music}
						onPlay={(e) => console.log("onPlay")}
						// other props here
					/>
					<div>
						<img
							className="portrait"
							src={portrait}></img>
					</div>
				</div>
			</header>
		</div>
	);
};

export default App;
