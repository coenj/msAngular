
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public myIP: string;
  private getIPAddress(): Observable<Response> {
    return this.http.get('http://httpbin.org/ip');
  }
  constructor(private http: Http) {
    this.getIPAddress()
      .subscribe(
      ipdata => this.myIP = ipdata.json().origin 
      );
  }


}