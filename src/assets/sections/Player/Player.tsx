import { useContext } from 'react'
import { SongItem } from '../Shared/SongItem'
import { PlayerNavControls } from './components/PlayerNavControls'
import { PlayerNavRight } from './components/PlayerNavRight'
import { PlayerSongTime } from './components/PlayerSongTime'
import styles from './Player.module.css'
import { GlobalContext } from '../../application/AppContext'
import { OuphenusApp } from '../../application/OuphenusApp'

export const Player = () => {

	const { songSelected } = useContext(GlobalContext);

	return (
		<div className={styles.content}>
			<div className={styles.buttons}>
				<PlayerNavControls />
			</div>
			<div className={styles.time} >
				<PlayerSongTime duration={songSelected.duration} />
			</div>
			<div className={styles.volume} >
				<PlayerNavRight />
			</div>
			<div className={styles.currentsong} >
				<SongItem
					title={songSelected.title}
					detail={songSelected.artist}
					iconUrl={OuphenusApp.PATH_IMAGE_SONGS + songSelected.image} />
			</div>
		</div>
	)
}