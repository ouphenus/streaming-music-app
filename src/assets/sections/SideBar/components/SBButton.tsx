import styles from './SBButton.module.css'

interface Props {
	icon: string,
	name: string,
	children?: React.ReactNode
}

export const SBButton = ({ icon, name, children }: Props) => {
	return (
		<div className={styles.content}>
			<img src={icon} alt="icon" className={styles.icon} />
			<span className={styles.info}>{name}</span>
			<span className={styles.children}>{children}</span>
		</div>
	)
}