import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { bookAdd,bookList } from 'src/config/property';

@Injectable({
  providedIn: 'root'
})
export class BookService {


  constructor(private http:HttpClient) { }

  getData()
  {
    let url=bookList;
    return this.http.get(url);
  }
}
