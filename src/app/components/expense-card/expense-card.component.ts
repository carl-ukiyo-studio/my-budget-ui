import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Expense } from "../../interfaces/Expense";

@Component({
  selector: 'app-expense-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './expense-card.component.html',
  styleUrls: ['./expense-card.component.scss']
})
export class ExpenseCardComponent {
  @Input() expense: Expense = {} as any;
}
