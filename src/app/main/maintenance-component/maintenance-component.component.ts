import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maintenance-component',
  templateUrl: './maintenance-component.component.html',
  styleUrls: ['./maintenance-component.component.scss']
})
export class MaintenanceComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onChange (value) {
    console.log('mocking value', value);
    sessionStorage.setItem('mocking', value);
  }
}
