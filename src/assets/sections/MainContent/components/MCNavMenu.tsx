import iconArrowNext from '../../../images/icons/icon-arrow-next.svg'
import iconArrowBack from '../../../images/icons/icon-arrow-back.svg'
import iconPeople from '../../../images/icons/icon-people.svg'
import iconBell from '../../../images/icons/icon-bell.svg'
import iconUser from '../../../images/icons/icon-user.svg'
import styles from './MCNavMenu.module.css'
import { CircleButton } from '../../Shared/CircleButton'


export const MCNavMenu = () => {
	return (
		<div className={styles.content}>
			<CircleButton icon={iconArrowBack} />
			<CircleButton icon={iconArrowNext} />
			<div />
			<CircleButton icon={iconPeople} />
			<CircleButton icon={iconBell} />
			<CircleButton icon={iconUser} />
		</div>
	)
}