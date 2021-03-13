import { Component } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'getting-stated';
  books = [1, 2];

  data:any = []; 
  constructor (private http: HttpClient) {
  	this.http.get('http://localhost/CreateRESTfulAPIs/api/itemstore/v1/items/1').subscribe(data => {
  		this.data.push(data);
  		console.log(this.data);

  	}, error => console.error(error));
  }
}
