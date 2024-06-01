import styles from "./PlayerNavControls.module.css"
import { PlayerButton } from "./PlayerButton"
import iconPlay from "../../../images/icons/icon-song-play.svg"
import iconNext from "../../../images/icons/icon-song-next.svg"
import iconBack from "../../../images/icons/icon-song-back.svg"
import iconShuffle from "../../../images/icons/icon-song-shuffle.svg"
import iconRepeat from "../../../images/icons/icon-song-repeat.svg"

export const PlayerNavControls = () => {
	return (
		<div className={styles.navButtons}>
			<PlayerButton icon={iconShuffle} />
			<PlayerButton icon={iconBack} />
			<PlayerButton icon={iconPlay} isPlay />
			<PlayerButton icon={iconNext} />
			<PlayerButton icon={iconRepeat} />
		</div>
	)
}