import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AccountsComponent } from "src/app/accounts/accounts.component";
import { AccountsbyidComponent } from "src/app/accounts/accountsbyid/accountsbyid.component";
import { AppComponent } from "src/app/app.component";
import { ModalwindowComponent } from "src/app/desc176/modalwindow/modalwindow/modalwindow.component";
import { HomeComponent } from "src/app/example/home/home.component";
import { SaccountsComponent } from "src/app/saccounts/saccounts/saccounts.component";
import { SaccountsnumberComponent } from "src/app/saccounts/saccountsnumber/saccountsnumber/saccountsnumber.component";

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'accountsbyid', component: AccountsbyidComponent },
      { path: 'accounts', component: AccountsComponent },
      { path: 'saccounts', component: SaccountsComponent },
      { path: 'saccountsnumber', component: SaccountsnumberComponent },
      { path: 'modalwindow',component:ModalwindowComponent},
      { path: '', redirectTo: '/app/home', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
