import {useState} from "react";

export const MusicAside = () => {

	const [activeItem, setActiveItem] = useState(null);

	const handleItemClick = (index) => {
		setActiveItem(index);
	};

	return (
		<aside className="categotyMenu">
			<span className="categoryName">
				<span className="categories compilates">Подборки</span>
			</span>
			<ul id='categories1'>
				<li className={`categoryItem ${activeItem === 0 ? 'active' : ''}
`} onClick={() => handleItemClick(0)}>
					<p>Новинки</p>
				</li>
				<li className={`categoryItem ${activeItem === 1 ? 'active' : ''}
`} onClick={() => handleItemClick(1)}>
					<p>Хиты 2022</p>
				</li>
				<li className={`categoryItem ${activeItem === 2 ? 'active' : ''}
`} onClick={() => handleItemClick(2)}>
					<p>Русский Фреш</p>
				</li>
				<li className={`categoryItem ${activeItem === 3 ? 'active' : ''}
`} onClick={() => handleItemClick(3)}>
					<p>В дорогу</p>
				</li>
				<li className={`categoryItem ${activeItem === 4 ? 'active' : ''}
`} onClick={() => handleItemClick(4)}>
					<p>Подкасты</p>
				</li>
			</ul>
		</aside>
	)
}