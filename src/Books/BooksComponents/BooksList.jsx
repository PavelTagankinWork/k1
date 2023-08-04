import {BooksCard} from "./BooksCard";
import BooksData from "../../A_Data/BooksData";

export const BooksList = () => {
	return (
		<section>
			<ul className="cardsList">
				{BooksData.map((booksCard) => <BooksCard key={booksCard.id} src={booksCard.src} alt={booksCard.alt}/>)}
			</ul>
		</section>
	)
}