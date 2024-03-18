import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";

export const AppBarBackOnly = () => {
	const navigate = useNavigate();

	const handleBack = () => {
		navigate(-1);
	};

	return (
		<AppBar elevation={0} color="transparent" position="fixed">
			<Toolbar>
				<IconButton
					size="large"
					edge="start"
					color="white"
					aria-label="back"
					onClick={handleBack}
					sx={{ mr: 2 }}
				>
					<span className="material-symbols-rounded">arrow_back</span>
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};
