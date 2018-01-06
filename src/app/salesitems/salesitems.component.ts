import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-salesitems',
  templateUrl: './salesitems.component.html',
  styleUrls: ['./salesitems.component.css']
})
export class SalesitemsComponent implements OnInit {

  constructor(public http: HttpClient) {}

  ngOnInit() {

  }

  public ping() {
    this.http.get(`${environment.API_ENDPOINT}/saleitems`)
      .subscribe(
        data => console.log(data),
        err => console.log(err)
      );
  }

  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];

  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];

}
