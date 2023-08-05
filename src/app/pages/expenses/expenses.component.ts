import { Component, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Expense {
  name: string;
  amount: number;
  category: string;
  date: Date;
}
@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss'],
})
export class ExpensesComponent {
  expenses: WritableSignal<Expense[]> = signal([
    {
      name: 'Rent',
      amount: 1000,
      category: 'Housing',
      date: new Date(2023, 7, 1),
    },
    {
      name: 'Groceries',
      amount: 200,
      category: 'Food',
      date: new Date(2023, 7, 2),
    },
    {
      name: 'Bus ticket',
      amount: 100,
      category: 'Transportation',
      date: new Date(2023, 7, 3),
    },
    // Add more expenses as needed
  ]);

  newExpense: Expense = { name: '', amount: 0, category: '', date: new Date() };

  addExpense() {
    if (
      this.newExpense.name &&
      this.newExpense.amount &&
      this.newExpense.category
    ) {
      this.expenses.mutate((values) => values.push(this.newExpense));
      this.newExpense = { name: '', amount: 0, category: '', date: new Date() };
    }
  }
}
