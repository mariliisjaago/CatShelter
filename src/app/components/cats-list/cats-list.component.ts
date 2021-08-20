import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cat, CatsService } from '../cats-service';

@Component({
  selector: 'cat-cats-list',
  templateUrl: './cats-list.component.html',
  styleUrls: ['./cats-list.component.scss']
})
export class CatsListComponent implements OnInit {
  cats: Cat[] = [];
  imageWidth: number = 100;
  imageMargin: number = 2;
  isImages = false;
  listFilter: string = '';

  constructor(
    private catsService: CatsService
  ) { }

  ngOnInit(): void {
    this.cats = this.catsService.getCats();
  }

  toggleImages(): void {
    this.isImages = !this.isImages;
  }

}
