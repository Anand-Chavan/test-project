import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  constructor(private http: HttpClient) { }

  getData()
  {
    return  this.http.get('https://jsonplaceholder.typicode.com/todos').toPromise();
  }

  getData2()
  {
    return  this.http.get('https://jsonplaceholder.typicode.com/posts').toPromise();
  }
}
