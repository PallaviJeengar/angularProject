import { Component, OnInit } from '@angular/core';
import { BookService } from './services/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  books:{} | undefined;

  constructor(private bookService:BookService) { }

  ngOnInit(): void {
  }

  getBookList(){
    this.bookService.getData().subscribe(data=>{
      this.books=data;
    })
  }
}
