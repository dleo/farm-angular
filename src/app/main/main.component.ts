import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'farm-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {

  public isCollapsed = false;

  constructor() { }

  ngOnInit() {
  }

}
