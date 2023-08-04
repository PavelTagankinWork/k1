import MusicData from "../../A_Data/MusicData";
import {MusicCard} from "./MusicCard";
import styles from './MusicCard.module.css'

export const MusicList = () => {
	return (
		<section>
			<h2 className={styles.h2}>Недавно слушивали</h2>
			<ul className={styles.list}>
				{MusicData.map((musicCard) => <MusicCard h1={musicCard.h1} p={musicCard.p} span={musicCard.span} src={musicCard.src} key={musicCard.id}/> )}
			</ul>
			<h2 className={styles.h2}>Свежие новинки</h2>
			<ul className={styles.list}>
				{MusicData.map((musicCard) => <MusicCard h1={musicCard.h1} p={musicCard.p} span={musicCard.span} src={musicCard.src} key={musicCard.id}/> )}
			</ul>
		</section>
	)
}