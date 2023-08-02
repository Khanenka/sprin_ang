import { trigger, state, style, transition, animate } from '@angular/animations';
import { NgFor, NgIf } from '@angular/common';
import { Component, ElementRef, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Desc176 } from 'src/app/desc176/desc176';
import { HttpService } from 'src/app/desc176/desc176.service';
import { ModalwindowComponent } from 'src/app/desc176/modalwindow/modalwindow/modalwindow.component';
import { Saccounts } from '../saccounts';
import { SaccountsService } from '../saccounts.service';



@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],


})
export class ModalComponent {
  dialog: any;
  code!: string;
  constructor(

) {}

// saccounts!: Saccounts[];
// visible:boolean = false;
// @ViewChild('myDiv') myDiv!: ElementRef;
// showLo(){
//   console.log( this.myDiv.nativeElement.innerHTML)
// }
// displayedColumns = ['name'];

// public getSAccountsByIP() {

//   this.sacccountsService.getService(this.code)
//     .subscribe(
//       (result: any) => {
//         console.log(this.code)
//         console.log(result)
//         this.saccounts = result;



//       }

//     )

// }
  }














