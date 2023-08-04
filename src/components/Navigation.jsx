import styles from './Navigation.module.css'
import {NavLink} from "react-router-dom";

export const Navigation = () => {
	return (
		<div className={styles.source}>
			<ul className={styles.sourceList}>
				<li className={styles.sourceItem}>
					<NavLink to='.' className={styles.sourceItemLink}>
						<img src='/Books.svg' className={styles.svg} />
						<span>Книги</span>
					</NavLink>
				</li>
				<li className={styles.sourceItem}>
					<NavLink to='/Films' className={styles.sourceItemLink}>
						<img src='/Films.svg' className={styles.svg} />
						<span>Фильмы</span>
					</NavLink>
				</li>
				<li className={styles.sourceItem}>
					<NavLink to='Music' className={styles.sourceItemLink}>
						<img src='/Music.svg' className={styles.svg} />
						<span>Музыка</span>
					</NavLink>
				</li>
				<li className={styles.sourceItem}>
					<NavLink to='Youtube' className={styles.sourceItemLink}>
						<img src='/Youtube.svg' className={styles.svg} />
						<span>Youtube</span>
					</NavLink>
				</li>
			</ul>
		</div>
	)
}