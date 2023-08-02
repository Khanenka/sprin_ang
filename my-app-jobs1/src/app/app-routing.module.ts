import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountsbyidComponent } from './accounts/accountsbyid/accountsbyid.component';
// import { AuthGuard } from 'src/auth.guard';
import { HomeComponent } from './example/home/home.component';

import { LoginComponent } from './loginform/login/login.component';
import { SaccountsComponent } from './saccounts/saccounts/saccounts.component';
import { SaccountsnumberComponent } from './saccounts/saccountsnumber/saccountsnumber/saccountsnumber.component';


const routes: Routes = [
  // { path: 'login',component: LoginComponent },
  { path: '', redirectTo: "home",pathMatch:'full' },
  // { path: 'logout',component: LoginComponent },
  { path: 'home',component: HomeComponent,pathMatch:'full' },
  { path: 'app-accountsbyid',component: AccountsbyidComponent },
  { path: 'app-accounts',component: AccountsComponent },
  { path: 'app-saccounts',component: SaccountsComponent },
  { path: 'app-saccountsnumber',component: SaccountsnumberComponent }


  // {
  //   path: 'app',
  //   canActivate: [AuthGuard],

  //   loadChildren: () => import('./loginform/login/admin.module').then((m) => m.AdminModule),





  // }


];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
