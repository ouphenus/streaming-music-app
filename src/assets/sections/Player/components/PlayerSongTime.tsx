import styles from './PlayerSongTime.module.css'

interface Props {
	duration: string;
}

export const PlayerSongTime = ({ duration }: Props) => {
	return (
		<div className={styles.content}>
			<span>0:00</span>
			<input className={styles.slider} type="range" min="0" max="100" defaultValue="50" />
			<span>{duration}</span>
		</div>
	)
}