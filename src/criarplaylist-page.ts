import {PlaylistsService} from './services/playlists-service'
import {inject, IRouter} from 'aurelia'
import { IPlaylist } from './entities/playlist'

@inject()
export class CriarplaylistPage {
    constructor(private playlistservices:PlaylistsService, @IRouter private router:IRouter){
        
    }

    private playlists:IPlaylist = {}

    guardar(event:SubmitEvent){
        console.log("event", event, this.playlists)
        event.preventDefault()
        this.playlistservices.guardarPlaylist(this.playlists).then(()=>{
        this.router.load('listar')
        })
        
      
   }
}