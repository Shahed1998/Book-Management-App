import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}

  books: Book[] = [];

  ngOnInit(): void {
    this.route.data.subscribe((res: any) => {
      this.books = res.books;
    });
  }
}
