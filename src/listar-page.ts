import { inject } from "aurelia";
import { PlaylistsService } from "./services/playlists-service";

@inject()
export class ListarPage {
    constructor(private playlistsService:PlaylistsService){
        
    }

    private playlists = []

    load(params){
        console.log('teste')
        this.playlistsService.getAll().then((_playlists)=>{
            this.playlists=_playlists
        })
    } 

}