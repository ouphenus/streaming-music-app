import { createContext, useEffect, useState } from "react";
import { Data, OuphenusApp, Playlist, Song } from "./OuphenusApp";

export interface GlobalContextData {
	isLoaded: boolean;
	currentPlaylist: Playlist;
	allPlayList: Playlist[];
	songsForPlaylist: Song[];
	songSelected: Song;
	selectPlaylist: (id: number) => void;
	selectSong: (id: number) => void;
}

// Creando Contexto Global de la Aplicacion
export const GlobalContext = createContext({} as GlobalContextData);

export const AppContext = ({ children }: { children: JSX.Element }) => {
	const initPlayList: Playlist = { icon: "", id: 0, likes: 0, portrait: "", songs: [], title: "", color: "" };
	const initSong: Song = { id: 0, album: "", artist: "", duration: "", image: "", title: "" };

	const [isLoaded, setIsLoaded] = useState(false);
	const [currentPlaylist, setCurrentPlaylist] = useState<Playlist>(initPlayList);
	const [allPlayList, setAllPlayList] = useState<Playlist[]>([]);
	const [allSongs, setAllSongs] = useState<Song[]>([]);
	const [songsForPlaylist, setSongsForPlaylist] = useState<Song[]>([]);
	const [songSelected, setSongSelected] = useState<Song>(initSong);

	// Carga la primera que se crea el componente
	useEffect(() => { load(); }, []);

	// Carga asyncrona
	const load = async () => {
		const data: Data = await OuphenusApp.loadData();
		setIsLoaded(true);
		setAllPlayList(data.playlists);
		setAllSongs(data.songs);
	}

	// Callback para esperar el seteo de  "allPlayList"
	useEffect(() => {
		if (allPlayList.length > 0) {
			setCurrentPlaylist(allPlayList[0]);
		}
	}, [allPlayList])

	// Callback para esperar el seteo de  "allSongs"
	useEffect(() => {
		if (allSongs.length > 0) {
			setSongsForPlaylist(getSongsForPlaylist(1));
			selectSong(23);
		}
	}, [allSongs])

	// Seleccionar un playlist por Id
	const selectPlaylist = (id: number) => {
		const playlist = allPlayList.find(list => list.id == id);
		if (playlist) {
			setCurrentPlaylist(playlist);
			setSongsForPlaylist(getSongsForPlaylist(id));
		}
	}

	// Seleccionar una cacion por Id
	const selectSong = (id: number) => {
		const song = allSongs.find(snd => snd.id == id);

		if (song) {
			setSongSelected(song);
		}
	}

	// Retornando lista de canciones por Id del playlist
	const getSongsForPlaylist = (id: number): Song[] => {
		const playlist = allPlayList.find(playlist => playlist.id == id);
		let songs: Song[] = [];
		if (playlist) {
			playlist.songs.map(songId => {
				const song = allSongs.find(song => song.id == songId);
				if (song) {
					songs.push(song);
				}
			})
		}
		return songs;
	}

	// Encapsulando a los hijos en el contexto Global
	return (
		<GlobalContext.Provider value={{
			isLoaded: isLoaded,
			currentPlaylist,
			allPlayList,
			selectPlaylist,
			songsForPlaylist,
			songSelected,
			selectSong
		}}>
			{children}
		</GlobalContext.Provider>
	)
};

