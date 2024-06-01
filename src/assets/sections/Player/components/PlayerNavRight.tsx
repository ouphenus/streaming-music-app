import styles from "./PlayerNavRight.module.css"
import { PlayerButton } from "./PlayerButton"
import iconMaximize from "../../../images/icons/icon-maximize.svg"
import iconDevice from "../../../images/icons/icon-device.svg"
import iconMicro from "../../../images/icons/icon-micro.svg"
import iconVolume from "../../../images/icons/icon-volume.svg"

export const PlayerNavRight = () => {
	return (
		<div className={styles.navButtons}>
			<PlayerButton icon={iconMicro} />
			<PlayerButton icon={iconDevice} />
			<PlayerButton icon={iconVolume} />
			<input className={styles.volumeSlider} type="range" min="0" max="100" defaultValue="50" />
			<PlayerButton icon={iconMaximize} />
		</div>
	)
}