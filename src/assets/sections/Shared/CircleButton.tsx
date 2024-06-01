import styles from './CircleButton.module.css'

interface Props {
	icon: string
}
export const CircleButton = ({ icon }: Props) => {
	return (
		<div className={styles.content}>
			<img src={icon} alt="icon" className={styles.icon} />
		</div>
	)
}