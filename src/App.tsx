
import styles from './App.module.css'
import { SideBarMenu } from './assets/sections/SideBar/SideBarMenu'
import { MainContent } from './assets/sections/MainContent/MainContent'
import { Player } from './assets/sections/Player/Player'
import { AppContext } from './assets/application/AppContext'

function App() {
	return (
		<AppContext>
			<main className={styles.container}>
				<aside className={styles.sidebar}>
					<SideBarMenu />
				</aside>
				<main className={styles.mainContent}>
					<MainContent />
				</main>
				<footer className={styles.player}>
					<Player  />
				</footer>
			</main>
		</AppContext>
	)
}
export default App
