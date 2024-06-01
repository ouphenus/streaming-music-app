import styles from './MCSongsList.module.css'
import iconClock from '../../../images/icons/icon-clock.svg'
import { useContext } from 'react';
import { GlobalContext } from '../../../application/AppContext';
import { OuphenusApp } from '../../../application/OuphenusApp';

export const MCSongsList = () => {

	const { songsForPlaylist, selectSong, songSelected } = useContext(GlobalContext);

	return (
		<div className={styles.content}>
			<table>
				<thead>
					<tr className={styles.headRow}>
						<th className={styles.headRow}>#</th>
						<th className={styles.headRow}>Title</th>
						<th className={`${styles.albumCol} ${styles.headRow}`}>Album</th>
						<th className={styles.headRow}>
							<img className={styles.iconClock} src={iconClock} alt="icon clock" />
						</th>
					</tr>
				</thead>
				<tbody>
					{songsForPlaylist.map((song, index) => {
						return (
							<tr key={index} className={styles.rowSong} onClick={()=>{ selectSong(song.id) }}>
								<td >
									<div className={styles.columnContent}>
										<span className={`textOverflow ${styles.column}`}>{index + 1}</span>
									</div>
								</td>
								<td>
									<div className={styles.itemSong}>
										<img className={styles.songIcon} src={OuphenusApp.PATH_IMAGE_SONGS + song.image} alt="" />
										<span className={`textOverflow ${styles.songTitle} ${ songSelected.id == song.id && styles.selected}`}>{song.title}</span>
										<span className={`textOverflow ${styles.songArtist}`}>{song.artist}</span>
									</div>
								</td>
								<td className={styles.albumCol}>
									<div className={styles.columnContent}>
										<span className={`textOverflow ${styles.column}`}>{song.album}</span>
									</div>
								</td>
								<td>
									<div className={styles.columnContent}>
										<span className={`textOverflow ${styles.column}`}>{song.duration}</span>
									</div>
								</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	)
}