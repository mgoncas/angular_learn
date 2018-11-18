import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[];

  constructor(private _spotifyService: SpotifyService) {}

  ngOnInit() {
    this._spotifyService.getNewReleases().subscribe((data: any) => {
      console.log(data);
      this.nuevasCanciones = data.albums.items;
      console.log(this.nuevasCanciones);
    });
  }
}
