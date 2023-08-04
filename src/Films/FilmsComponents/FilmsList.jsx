import FilmsData from "../../A_Data/FilmsData";
import {FilmsCard} from "./FilmsCard";

export const FilmsList = () => {
	return (
		<section>
			<ul className="cardsList">
				{FilmsData.map((filmsCard) => <FilmsCard key={filmsCard.id} src={filmsCard.src} alt={filmsCard.alt}/>)}
			</ul>
		</section>
	)
}