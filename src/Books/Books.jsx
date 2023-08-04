import {BooksCard} from "./BooksComponents/BooksCard";
import {BooksList} from "./BooksComponents/BooksList";
import {BooksAside} from "./BooksComponents/BooksAside";
import {useState} from "react";

export const Books = () => {

	const listItems1 = document.querySelectorAll('#categories1 li');

	listItems1.forEach(item => {
		item.addEventListener('click', () => {
			listItems1.forEach(li => li.classList.remove('active'));
			item.classList.add('active');
		});
	});

	const listItems2 = document.querySelectorAll('#categories2 li');

	listItems2.forEach(item => {
		item.addEventListener('click', () => {
			listItems2.forEach(li => li.classList.remove('active'));
			item.classList.add('active');
		});
	});

	return (
		<div className="catalog mainApp">
			<BooksAside/>
			<BooksList/>
		</div>
	)
}