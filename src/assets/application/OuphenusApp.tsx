export interface Data {
    playlists: Playlist[],
    songs: Song[],
}

export interface Playlist {
    id: number,
    title: string,
    icon: string,
    portrait: string,
    songs: number[],
    likes: number,
    color: string
}

export interface Song {
    id: number,
    title: string,
    artist: string,
    album: string,
    duration: string,
    image: string
}

export class OuphenusApp {
    public static PATH_DATA: string = './assets/data/';
    public static PATH_IMAGE_SONGS: string = './assets/images/songs/';

    public static async loadData(): Promise<Data> {
        const url = OuphenusApp.PATH_DATA + 'data.json';
        const resp = await fetch(url);
        const data = await resp.json() as Data;
        return data;
    }
}
