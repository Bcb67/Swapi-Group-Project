import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Config } from './search.component'

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  configUrl = '../../assets/config.json'

  getConfig() {
    // return this.http.get(this.configUrl + `people/luke`);
    return this.http.get<Config>(this.configUrl)
  }
  constructor( private http: HttpClient) { }
}
