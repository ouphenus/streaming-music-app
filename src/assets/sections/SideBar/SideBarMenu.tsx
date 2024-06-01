import styles from './SideBarMenu.module.css'
import iconLibrary from '../../images/icons/icon-library.svg'
import iconHome from '../../images/icons/icon-home.svg'
import iconSearch from '../../images/icons/icon-search.svg'
import iconPlus from '../../images/icons/icon-plus.svg'
import iconArrowRight from '../../images/icons/icon-arrow-right.svg'
import { SBButton } from './components/SBButton'
import { SongItem } from '../Shared/SongItem'
import { CircleButton } from '../Shared/CircleButton'
import { useContext, useState } from 'react'
import { GlobalContext } from '../../application/AppContext'



export const SideBarMenu = () => {
	const { allPlayList: allPlayList, selectPlaylist } = useContext(GlobalContext);
	const [playlistSelected, setPlaylistSelected] = useState(1);

	const onSelectPlaylist = (id: number) => {
		setPlaylistSelected(id);
		selectPlaylist(id);
	}

	return (
		<div className={styles.content}>
			<div className={styles.topmenu}>
				<SBButton icon={iconHome} name="Home" />
				<SBButton icon={iconSearch} name="Search" />
			</div>
			<div className={styles.playlist}>
				<div className={styles.libraryHeader}>
					<SBButton icon={iconLibrary} name="Library">
						<CircleButton icon={iconPlus} />
						<CircleButton icon={iconArrowRight} />
					</SBButton>
				</div>
				{
					allPlayList.map(playlist =>
						<SongItem
							key={playlist.id}
							id={playlist.id}
							title={playlist.title}
							detail={`Playlist ♫ ${playlist.songs.length.toString()} songs`}
							iconUrl={playlist.icon}
							isSelected={playlist.id == playlistSelected}
							onClick={onSelectPlaylist} />)
				}
			</div>
		</div>
	)
}