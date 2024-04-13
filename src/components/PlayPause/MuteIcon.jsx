import React from "react";
import "./PlayPause.scss";

function MuteIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="682.667"
			className="music-icon"
			height="682.667"
			version="1"
			viewBox="0 0 512 512">
			<path
				d="M102 5099c-78-39-118-133-92-215 10-31 127-154 603-631l592-593h-50c-192 0-319-72-388-218l-32-67-3-778c-2-500 1-798 8-834 28-152 141-264 295-292 36-7 221-11 487-11h428l898-719c571-456 913-723 937-731 79-26 176 15 215 90 19 37 20 58 20 385 0 190 3 345 8 345 4 0 185-178 402-396C4833 30 4867 1 4939 0c83 0 167 74 178 158 12 91 155-58-2421 2521C1019 4357 283 5088 255 5101c-53 25-100 24-153-2zm1600-1936l128-128V1830h-730v1460h475l127-127zm1230-1230l728-728V888c0-175-3-318-6-318-4 0-334 262-735 583l-729 582v463c0 254 3 462 7 462 5 0 335-327 735-727zM3765 5101c-50-24-1512-1196-1539-1233-29-40-33-133-8-178 42-75 120-112 207-96 28 6 173 116 629 482 327 261 596 474 600 474 3 0 6-514 6-1142 0-1068 1-1145 18-1177 61-122 225-134 309-24l28 36 3 1369c2 1358 2 1369-18 1408-42 83-153 121-235 81z"
				transform="matrix(.1 0 0 -.1 0 512)"></path>
		</svg>
	);
}

export default MuteIcon;
