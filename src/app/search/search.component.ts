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
  searchT = ''
  setDropdownValue(input) {
    this.dropdownValue = input;
    if(this.sTerm !== '') {
      this.searchT = `/?search=${this.sTerm}`
    } else {
      this.searchT = ''
    }
    this.peopleUrl = `https://swapi.co/api/${this.dropdownValue}${this.searchT}` 
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
