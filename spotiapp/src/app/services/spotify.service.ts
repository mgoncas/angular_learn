import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders({
  'Authorization': 'Bearer BQBdIf1fn4Ln-vknL_LGqk1F7x8dh2Byvc3g6firzv8GhKTIn1scvEd2vaNSZ_mEKuy5t9tWwUzldgaxJQY'
});

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {


  constructor(private http: HttpClient) {
    console.log('SpotifyService listo!');
  }

  getNewReleases() {
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }
}
