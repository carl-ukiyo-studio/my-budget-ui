import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NgForOf } from "@angular/common";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
  standalone: true,
  imports: [
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    NgForOf
  ]
})
export class OverviewComponent implements OnInit {
  cards: WritableSignal<Card[]> = signal([]);

  ngOnInit() {
    this.cards.set([
      {title: 'Card 1', cols: 1, rows: 1},
      {title: 'Card 2', cols: 1, rows: 1},
      {title: 'Card 3', cols: 1, rows: 1},
      {title: 'Card 4', cols: 1, rows: 1}
    ]);
  }
}

class Card {

  title: string;
  cols: number;
  rows: number;

  constructor(title: string, cols: number, rows: number) {
    this.title = title;
    this.cols = cols;
    this.rows = rows;
  }

}
