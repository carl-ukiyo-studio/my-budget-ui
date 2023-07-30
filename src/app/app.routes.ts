import { Routes } from '@angular/router';
import { OverviewComponent } from "./components/overview/overview.component";
import { TransactionsComponent } from "./components/transactions/transactions.component";
import { SettingsComponent } from "./components/settings/settings.component";

export const routes: Routes = [
  {path: '', component: OverviewComponent},
  {path: 'overview', component: OverviewComponent},
  {path: 'transactions', component: TransactionsComponent},
  {path: 'settings', component: SettingsComponent},
];
