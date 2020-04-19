import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MongoService {

  constructor(private http: HttpClient) { }
  getadperm() {
    const apiUrl = '';
    return this.http.get(apiUrl);
  }
  getcoviddetails() {
    const apiUrl = '';
    return this.http.get(apiUrl);
  }
  inccounter() {
    const apiUrl = '';
    return this.http.get(apiUrl);
  }
  getcovidnews() {
    const apiUrl = '';
    return this.http.get(apiUrl);
  }
}
