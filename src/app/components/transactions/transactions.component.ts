import { Component, OnInit, signal, WritableSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from "@angular/material/list";
import { IncomeCardComponent } from "../income-card/income-card.component";
import { Income } from "../../interfaces/Income";
import { Expense } from "../../interfaces/Expense";
import { ExpenseCardComponent } from "../expense-card/expense-card.component";

@Component({
  selector: 'app-transactions',
  standalone: true,
  imports: [CommonModule, MatListModule, IncomeCardComponent, ExpenseCardComponent],
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})
export class TransactionsComponent implements OnInit {

  income: WritableSignal<Income[]> = signal([]);
  expenses: WritableSignal<Expense[]> = signal([]);

  ngOnInit() {
    this.income.set([
      {
        incomeId: 1,
        userId: 1,
        name: "Salary",
        amount: 1000,
        frequency: "Monthly",
        createdAt: new Date()
      },
      {
        incomeId: 2,
        userId: 1,
        name: "Bonus",
        amount: 500,
        frequency: "Quarterly",
        createdAt: new Date()
      },
      {
        incomeId: 3,
        userId: 1,
        name: "Investment",
        amount: 200,
        frequency: "Annually",
        createdAt: new Date()
      }
    ])

    this.expenses.set([
      {
        expenseId: 1,
        userId: 1,
        name: "Rent",
        amount: 500,
        category: "Housing",
        date: new Date(),
        createdAt: new Date()
      },
      {
        expenseId: 2,
        userId: 1,
        name: "Groceries",
        amount: 200,
        category: "Food",
        date: new Date(),
        createdAt: new Date()
      },
      {
        expenseId: 3,
        userId: 1,
        name: "Utilities",
        amount: 100,
        category: "Utilities",
        date: new Date(),
        createdAt: new Date()
      }
    ])
  }

}
