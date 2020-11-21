import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import properties from '../../assets/files/properties.json';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  constructor(
    private http: HttpClient
  ) { }

  getData(){    
    console.log(window.location.hostname);
    console.log(properties);
    const id = properties.id;
    return this.http.get('https://jsonplaceholder.typicode.com/todos/'+id)
  }
}
