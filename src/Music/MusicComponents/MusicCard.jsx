import styles from './MusicCard.module.css'

export const MusicCard = ({src, h1, p, span}) => {
	return (
		<li className={styles.card}>
			<img src={src} className={styles.img}/>
			<h1 className={styles.h1}>{h1}</h1>
			<p className={styles.p}>{p}</p>
			<span className={styles.span}>{span}</span>
		</li>
	)
}