import React from "react";

import { Dialog, Slide } from "@mui/material";
import { useKonamiEasterEgg } from "../../utils/misc/konami";

export const EasterEgg = () => {
	const [easterEgg, setEasterEgg] = useKonamiEasterEgg();

	return (
		<>
			<Dialog
				open={easterEgg}
				onClose={() => setEasterEgg(false)}
				sx={{
					background: "black",
				}}
			>
				<iframe
					width="560"
					height="315"
					src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&disablekb=1"
					title="EasterEgg"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				/>
			</Dialog>
			<Slide direction="up" in={easterEgg} mountOnEnter unmountOnExit>
				<img
					src="https://i.gifer.com/PYh.gif"
					loading="lazy"
					width={320}
					height={320}
					alt="nyan cat gif"
					style={{
						zIndex: "99999999",
						position: "fixed",
						bottom: 0,
						left: 0,
						objectFit: "cover",
					}}
				/>
			</Slide>
		</>
	);
};
