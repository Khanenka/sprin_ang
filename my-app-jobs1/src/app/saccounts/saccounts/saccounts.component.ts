import { CdkAriaLive } from '@angular/cdk/a11y';
import { Component,Inject, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModalwindowComponent } from 'src/app/desc176/modalwindow/modalwindow/modalwindow.component';
import { ModalComponent } from './modal/modal.component';

import { Saccounts } from './saccounts';
import { SaccountsService } from './saccounts.service';

@Component({
  selector: 'app-saccounts',
  templateUrl: './saccounts.component.html',
  styleUrls: ['./saccounts.component.css']
})
export class SaccountsComponent implements OnInit {


  dataSource: any;
  dialog: any;



  ngOnInit() {
  }
  saccounts!: Saccounts[];
  code!: string;
  value = 'Clear me';
  name!:string;


displayedColumns = ['description','id', 'balance','creationDate','activationDate','expirationDate','rechargeDate','descpr','phone'];
displayedColumns1 = ['name','address'];
columnsToDisplayWithExpand = [...this.displayedColumns, 'name'];




  constructor(
  private sacccountsService:SaccountsService,private dialog1: MatDialog){

  }

  @ViewChild('myDiv') myDiv!: ElementRef;
  // showExamplePrompt1(): void {
  //   const timeout = 3000;
  //   const dialogRef = this.dialog1.open(ModalComponent, { width: '700px',height: '500px' });


  // }

  public getSAccountsByIP() {

    this.sacccountsService.getService(this.code)
      .subscribe(
        (result: any) => {
          console.log(this.code)
          console.log(result)
          this.saccounts = result;



        }

      )

  }






  condition: boolean=true;

  toggle(){
      this.condition=!this.condition;
  }

  ReadMore:boolean = true;

  //hiding info box
  visible:boolean = false;

  showLo() {

    this.visible = !this.visible

  }

  element:boolean = false;
  showData() {
    return (this.element = true);
  }
  hideData() {
    return (this.element = false);
  }




  // showExamplePrompt(): void {
  //   const timeout = 3000;
  //   const dialogRef = this.dialog.open(SaccountsComponent, { width: '700px',height: '500px' });
  //   console.log(this.saccounts);


  //   }




  }






