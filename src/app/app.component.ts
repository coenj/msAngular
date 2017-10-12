
import 'rxjs/add/operator/toPromise';
import { Http, Response } from '@angular/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public myIP: string;
  constructor(private http: Http) {
    this.http.get('http://httpbin.org/ip')
      .toPromise()
      .then(response => this.myIP = response.json().origin)
      .catch(error => console.log(error));
  }
}