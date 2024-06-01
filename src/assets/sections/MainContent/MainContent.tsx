import { useContext } from 'react';
import { MCHeader } from './components/MCHeader';
import { MCNavMenu } from './components/MCNavMenu';
import { MCSongsList } from './components/MCSongsList';
import styles from './MainContent.module.css';
import { GlobalContext } from '../../application/AppContext';

export const MainContent = () => {
	const { currentPlaylist } = useContext(GlobalContext);
	const root:HTMLHtmlElement | null = document.querySelector(":root");

	if (root)
		{root.style.setProperty('--bg-gradient--topColor', currentPlaylist.color);

		//// Logs
		// const rootStyles = getComputedStyle(root, "");
		// const bgColor = rootStyles.getPropertyValue("--bg-gradient--topColor");
		// console.log(bgColor);
	}

	return (
		<div className={styles.content}>
			<MCNavMenu />
			<MCHeader
				portraitUrl={currentPlaylist.portrait}
				title={currentPlaylist.title}
				likes={currentPlaylist.likes}
				songs={currentPlaylist.songs ? currentPlaylist.songs.length : 0}
				duration="0:00 min" />
			<MCSongsList />
		</div>
	);
}