import { Routes } from '@angular/router';
import { OverviewComponent } from "./pages/overview/overview.component";
import { TransactionsComponent } from "./pages/transactions/transactions.component";
import { SettingsComponent } from "./pages/settings/settings.component";

export const routes: Routes = [
  {path: '', component: OverviewComponent},
  {path: 'overview', component: OverviewComponent},
  {path: 'transactions', component: TransactionsComponent},
  {path: 'settings', component: SettingsComponent},
];
