import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Income } from "../../../models/Income";

@Component({
  selector: 'app-income-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './income-card.component.html',
  styleUrls: ['./income-card.component.scss']
})
export class IncomeCardComponent {
  @Input() income: Income = {} as any;
}
