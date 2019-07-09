import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],

})
export class SearchComponent implements OnInit {
  sTerm = '';
  person= '';
  styleUrls: ['./search.component.css']
  dropdownValue = 'Pick a Category';
  peopleUrl=''
  setDropdownValue(input) {
    this.dropdownValue = input;
    this.peopleUrl = `https://swapi.co/api/${this.dropdownValue}/?search=${this.sTerm}` 
  }
  

  
  fetchInfo() {
    console.log('Fetching values')
    console.log(this.peopleUrl)
    this.http.get(this.peopleUrl)
      .subscribe(
        (data: any) => {
          this.person = data.results[0]
        })
    console.log(this.person)
  }

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit() {
    
  }

}
