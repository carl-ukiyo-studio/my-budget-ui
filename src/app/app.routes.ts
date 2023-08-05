import { Routes } from '@angular/router';
import { OverviewComponent } from './pages/overview/overview.component';
import { TransactionsComponent } from './pages/transactions/transactions.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { DebtComponent } from './pages/debt/debt.component';
import { SavingsComponent } from './pages/savings/savings.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { IncomeComponent } from './pages/income/income.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'transactions', component: TransactionsComponent },
  { path: 'income', component: IncomeComponent },
  { path: 'expenses', component: ExpensesComponent },
  { path: 'savings', component: SavingsComponent },
  { path: 'debt', component: DebtComponent },
  { path: 'reports', component: ReportsComponent },
];
