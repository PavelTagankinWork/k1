import {useState} from "react";

export const FilmsAside = () => {
	const [activeItem, setActiveItem] = useState(null);

	const handleItemClick = (index) => {
		setActiveItem(index);
	};

	const [activeItem2, setActiveItem2] = useState(null);

	const handleItemClick2 = (index) => {
		setActiveItem2(index);
	};


	return (
		<aside className="categotyMenu">
			<span className="categoryName">
				<span className="categories genre">Жанры</span>
			</span>
			<ul id="categories1">
				<li className={`categoryItem ${activeItem === 0 ? 'active' : ''}
`} onClick={() => handleItemClick(0)}>
					<p>Комедия</p>
				</li>
				<li className={`categoryItem ${activeItem === 1 ? 'active' : ''}
`} onClick={() => handleItemClick(1)}>
					<p>Боевик</p>
				</li>
				<li className={`categoryItem ${activeItem === 2 ? 'active' : ''}
`} onClick={() => handleItemClick(2)}>
					<p>Драма</p>
				</li>
				<li className={`categoryItem ${activeItem === 3 ? 'active' : ''}
`} onClick={() => handleItemClick(3)}>
					<p>Документальный</p>
				</li>
				<li className={`categoryItem ${activeItem === 4 ? 'active' : ''}
`} onClick={() => handleItemClick(4)}>
					<p>Биография</p>
				</li>
			</ul>
			<span className="categoryName">
				<span className="categories compilates">Подборки</span>
			</span>
			<ul id="categories2">
				<li className={`categoryItem ${activeItem2 === 0 ? 'active' : ''}
`} onClick={() => handleItemClick2(0)}>
					<p>Новинки</p>
				</li>
				<li className={`categoryItem ${activeItem2 === 1 ? 'active' : ''}
`} onClick={() => handleItemClick2(1)}>
					<p>Семейный</p>
				</li>
				<li className={`categoryItem ${activeItem2 === 2 ? 'active' : ''}
`} onClick={() => handleItemClick2(2)}>
					<p>Марвел</p>
				</li>
				<li className={`categoryItem ${activeItem2 === 3 ? 'active' : ''}
`} onClick={() => handleItemClick2(3)}>
					<p>Черный юмор</p>
				</li>
				<li className={`categoryItem ${activeItem2 === 4 ? 'active' : ''}
`} onClick={() => handleItemClick2(4)}>
					<p>Оскар</p>
				</li>
			</ul>
		</aside>
	)
}