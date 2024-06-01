import styles from './PlayerButton.module.css'

interface Props {
	icon: string,
	isPlay?: boolean
}
export const PlayerButton = ({ icon, isPlay = false }: Props) => {
	const iconClassName = isPlay ? styles.iconPlay : styles.icon;
	return (
		<div className={styles.content}>
			<img src={icon} alt="icon" className={iconClassName} />
		</div>
	)
}