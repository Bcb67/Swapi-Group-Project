import { Component, OnInit } from '@angular/core';

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
    console.log(this.sTerm)
  }
  
  constructor() { }

  ngOnInit() {
  }

}
