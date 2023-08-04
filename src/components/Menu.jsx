import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import moment from "moment-timezone";

export const Menu = () => {

	const [input, setInput] = useState({input: ''})


	const handleFromSubmit = (event) => {
		event.preventDefault()
	}

	const handleInputChange = (e, name) => {
		setInput({...input, [name]: e.target.value})
	}

	const [currentTimeMSC, setCurrentTimeMSC] = useState('');

	useEffect(() => {
		const interval = setInterval(() => {
			const now = moment().tz('Europe/Moscow');
			const formattedTime = now.format('HH:mm:ss');
			setCurrentTimeMSC(formattedTime);
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	const [currentTimeSPB, setCurrentTimeSPB] = useState('');

	useEffect(() => {
		const interval = setInterval(() => {
			const now = moment().tz('Europe/Moscow').tz('Europe/Samara');
			const formattedTime = now.format('HH:mm:ss');
			setCurrentTimeSPB(formattedTime);
		}, 1000);

	return () => {
		clearInterval(interval);
	};
}, []);


	return (
		<>
			<header className="mainHeader">
				<span className="Time">Санкт Петербург: {currentTimeMSC}</span>
				<span className="Time">Пн 4 {currentTimeSPB}</span>
				<span className="Time">Москва {currentTimeMSC}</span>
			</header>
			<div className="Filters">
				<Link to="." className="mainLogo">
					<img src="/mainLogo.svg" alt="Главный Логотип"/>
				</Link>
				<button className="Rating">
					<span>Рейтинг</span>
					<img className="RatingSvg" src='ratingDown.svg'/>
				</button>
				<input type="text" className="RatingInput" value={input.input} onChange={(e) => handleInputChange(e, 'input')}/>
				<button className="Exit">Выход</button>
			</div>
		</>
	)
}