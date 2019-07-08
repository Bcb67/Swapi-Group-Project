import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { HttpResponse, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],

})
export class SearchComponent implements OnInit {
  sTerm = '';
  styleUrls: ['./search.component.css']
  dropdownValue = 'Pick a Category';
  setDropdownValue(input) {
    this.dropdownValue = input;
    console.log(this.getConfigResponse())
  }

  config: Config;

  showConfig() {
    this.searchService.getConfig()
      // .subscribe((data:Config) => this.config = {
      //   SWAPIUrl: data['SWAPIUrl'],
      //   textfile: data['textfile']
      // });
      .subscribe((data: Config) => this.config = {...data});
  }

  getConfigResponse(): Observable<HttpResponse<Config>> {
    return this.http.get<Config>(
      'http://swapi.co/api/people/', {observe: 'response' });
  }
  
  

  constructor(
    private searchService: SearchService,
    private http: HttpClient,
  ) { }

  ngOnInit() {
  }

}
export interface Config {
  SWAPIUrl: string;
  textfile: string;
}