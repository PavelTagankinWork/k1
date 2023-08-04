import styles from './Bluetooth.module.css'

export const Bluetooth = () => {
	return (
		<div className={styles.div}>
			<div className={styles.img}>
				<img src='bluetooth.svg' className={styles.svg}/>
			</div>
			<div className={styles.text}>
				<h2 className={styles.h2}>Bluetooth</h2>
				<span className={styles.span}>Выкл</span>
			</div>
		</div>
	)
}