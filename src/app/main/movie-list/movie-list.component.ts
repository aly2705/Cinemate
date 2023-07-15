import {
  Component,
  Input,
  OnInit,
  ViewChildren,
  QueryList,
  AfterViewInit,
  ElementRef,
  OnChanges,
  AfterViewChecked,
} from '@angular/core';
import { Movie } from '../../models/movie.model';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent
  implements OnInit, AfterViewInit, OnChanges, AfterViewChecked
{
  @Input() movieList: Movie[];
  // decorator to get DOM references from the movieList in the template
  @ViewChildren('listItem', { read: ElementRef })
  listItems: QueryList<ElementRef>;
  // This will be used to keep the last element's reference
  lastItemRef: ElementRef<HTMLElement>;
  positions: number[];

  ngOnInit(): void {
    this.positions = this.movieList.map((_, i) => i);
  }

  ngAfterViewInit(): void {
    this.lastItemRef = this.listItems.last;
  }
  ngOnChanges(): void {
    this.positions = this.movieList.map((_, i) => i);
  }
  ngAfterViewChecked(): void {
    this.lastItemRef = this.listItems.last;
  }

  getOffset(index: number) {
    const position = this.positions.at(index);

    return `translate(${position * 115}%, -50%)`;
  }

  onShowNext(e: Event) {
    // Stops when last card is visible
    const btn = e.target as HTMLElement;
    const btnDistance = btn.getBoundingClientRect().x;
    const cardDistance =
      this.lastItemRef.nativeElement.getBoundingClientRect().x;
    const cardWidth =
      this.lastItemRef.nativeElement.getBoundingClientRect().width;

    if (cardDistance + cardWidth < btnDistance) {
      return;
    }
    this.positions = this.positions.map((el) => el - 1);
  }

  onShowBack() {
    if (this.positions.at(0) === 0) return;
    this.positions = this.positions.map((el) => el + 1);
  }
}
