import {FilmsAside} from "./FilmsComponents/FilmsAside";
import {FilmsList} from "./FilmsComponents/FilmsList";

export const Films = () => {
	return (
		<div className="mainApp catalog">
			<FilmsAside/>
			<FilmsList/>
		</div>
	)
}