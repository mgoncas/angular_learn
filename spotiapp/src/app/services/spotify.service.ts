import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const headers = new HttpHeaders({
  'Authorization': 'Bearer BQAeOTqcr7vy5Da15RuVqT3ZW-nG-hkbA59uaLlbbQGO4_657t1KLo1ZwBi-_0vR8wVDtT9TF4w-4T6o59k'
});

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  headerAuthorization: string;

  constructor(private http: HttpClient) {
    console.log('SpotifyService listo!');
    /*
    this.http.post('https://accounts.spotify.com/api/token', {
      'grant_type': 'client_credentials',
      'client_id': '9dea1ada4bc443ddb1ea51b3e1d50980',
      'client_secret': 'e3d6680bf15d46d28d772188427e564b'
    }).subscribe((data: any) => {
      console.log(data);
      this.headerAuthorization = data.access_token;
    });
    */
  }

  getNewReleases() {
    return this.http.get('https://api.spotify.com/v1/browse/new-releases', {headers});
  }

  getArtistas(termino: string){
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist`, {headers});
  }
}
