import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],

})
export class SearchComponent implements OnInit {
  styleUrls: ['./search.component.css']
  dropdownValue = 'Pick a Category';
  setDropdownValue(input) {
    this.dropdownValue = input
  }
  
  constructor() { }

  ngOnInit() {
  }

}
