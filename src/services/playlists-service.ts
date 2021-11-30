import { HttpClient, inject, json } from 'aurelia';
import { IPlaylist } from '../entities/playlist';
import { FetchUtils } from '../utils/fetch-utils';

@inject()
export class PlaylistsService {


    private client: HttpClient;

    constructor(private fetchUtils: FetchUtils) {
        this.client = this.fetchUtils.getClient();
    }


    getAll():Promise<IPlaylist[]> {
        //@ts-ignore
        return this.client.get('/playlists');
    }
    guardarPlaylist(playlists: IPlaylist) {
        return this.client.post('/playlists', json(playlists));
    }
}