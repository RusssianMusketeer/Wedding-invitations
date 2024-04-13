import "./PlayPause.scss";
import { useState, useEffect } from "react";
import useSound from "use-sound";
import Music from "../../Assets/music.mp3";
import PlayIcon from "./PlayIcon";
import MuteIcon from "./MuteIcon";

const PlayPause = () => {
	const [toggle, setToogle] = useState(true);
	const [isPlaying, setIsPlaying] = useState(false);
	const [play, { stop }] = useSound(Music, {
		onplay: () => setIsPlaying(true),
		onend: () => setIsPlaying(false),
	});

	const handleClick = () => {
		setToogle(!toggle);
		toggle ? play() : stop();
	};

	useEffect(() => {
		if (!isPlaying && toggle === false) {
			setToogle(!toggle);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isPlaying]);

	return (
		<div onClick={handleClick}>{toggle ? <MuteIcon /> : <PlayIcon />}</div>
	);
};

export default PlayPause;
