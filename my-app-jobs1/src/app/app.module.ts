import { DatePipe } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { AccountsService } from './accounts/accounts.service';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table'
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatSelectModule} from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DateComponent } from './date/date.component';
import { DateService } from './date/date.service';

import { HomeComponent } from './example/home/home.component';

import { TabsComponent } from './example/tabs/tabs.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgxPaginationModule } from 'ngx-pagination';

import { SaccountsComponent } from './saccounts/saccounts/saccounts.component';

import { SidebarDirective } from './sidebar.directive';
import { AccountsbyidComponent } from './accounts/accountsbyid/accountsbyid.component';
import { SaccountsnumberComponent } from './saccounts/saccountsnumber/saccountsnumber/saccountsnumber.component';
import { Desc176Component } from './desc176/desc176.component';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpService } from './desc176/desc176.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatDialog, MatDialogRef, MatDialogModule} from '@angular/material/dialog';
import { MatSortModule } from '@angular/material/sort';
import { LoginComponent } from './loginform/login/login.component';
import { LoginService } from './loginform/login/login-service.service';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive';
import { ModalwindowComponent } from './desc176/modalwindow/modalwindow/modalwindow.component';
import { ModalComponent } from './saccounts/saccounts/modal/modal.component';







// определение маршрутов
const appRoutes: Routes =[


];

@NgModule({
  declarations: [
    AppComponent,
    DateComponent,
    AccountsComponent,
    HomeComponent,
    TabsComponent,SaccountsComponent,SidebarDirective,AccountsbyidComponent,SaccountsnumberComponent,AccountsComponent,
      Desc176Component,ModalwindowComponent,ModalComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,HttpClientModule,DatePipe,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule,MatTabsModule,
    MatTableModule,MatInputModule,MatIconModule,
    MatButtonModule,MatTooltipModule,
    MatNativeDateModule,MatDatepickerModule,ReactiveFormsModule,
    BrowserAnimationsModule,MatSelectModule,MatFormFieldModule,MatInputModule,
    NgxPaginationModule, MatPaginatorModule,MatTableModule, MatDialogModule,
    MatSortModule,FormsModule,HttpClientModule,
    NgIdleKeepaliveModule.forRoot(),ReactiveFormsModule, MatDialogModule,   MatDialogModule,
    MatInputModule




  ],
  providers: [DateService,DatePipe,AccountsService,HttpService,LoginService,ModalwindowComponent,ModalComponent],
  bootstrap: [AppComponent,DateComponent,AccountsComponent, HomeComponent,TabsComponent,AccountsbyidComponent,SaccountsnumberComponent,Desc176Component,ModalwindowComponent,ModalComponent

  ]
})
export class AppModule { }
