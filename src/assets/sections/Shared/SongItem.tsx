import styles from './SongItem.module.css'

interface Props {
	iconUrl: string;
	title: string;
	detail: string;
	id?: number;
	isSelected?: boolean;
	onClick?: (id : number) => void
}

export const SongItem = ({ id, iconUrl, title, detail, isSelected, onClick }: Props) => {

	id = id ?? 0;
	isSelected = isSelected ?? false;

	const itemClick = () => {
		onClick?.(id);
	}

	return (
		<div onClick={itemClick} className={`${styles.content}`} >
			<img src={iconUrl} className={styles.icon} alt="icon" />
			<p className={`textOverflow ${styles.title} ${isSelected && styles.selected}`}>{title}</p>
			<span className={`textOverflow ${styles.detail}`}>{detail}</span>
		</div>
	)
}