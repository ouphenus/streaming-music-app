import styles from './MCHeader.module.css'

interface Props {
	portraitUrl: string,
	title: string,
	likes: number,
	songs: number,
	duration: string
}

export const MCHeader = ({ portraitUrl, title, likes, songs, duration }: Props) => {
	return (
		<div className={styles.content}>
			<img className={styles.portrait} src={portraitUrl} alt="" />
			<span className={`textOverflow ${styles.title}`}>{title}</span>
			<span className={`textOverflow ${styles.detail}`}>{likes} likes · {songs} songs · {duration}</span>
		</div>
	)
}