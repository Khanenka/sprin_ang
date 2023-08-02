import { CloseScrollStrategy } from '@angular/cdk/overlay';
import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { ActivatedRoute, Router } from '@angular/router';
import { Desc176 } from '../../desc176';
import { HttpService } from '../../desc176.service';

@Component({
  selector: 'app-modalwindow',
  templateUrl: './modalwindow.component.html',
  styleUrls: ['./modalwindow.component.css']
})
export class ModalwindowComponent implements OnInit {



    response: any;
    router!: Router;
    activeModal: any;
    pageChangeEvent($event: number) {
      throw new Error('Method not implemented.');
    }





    ds!: any;
    @ViewChild(MatPaginator) paginator!: MatPaginator;





    dataSource!: Desc176;
    dataLength!: number;
    errorMessage!: string;
    pageEvent!: PageEvent;
    Desc: any;
    @Input() page = 0
    @Input() size = 2;
    @Input() text = "";
    @ViewChild(MatSort) sort: MatSort | undefined;

    ngAfterViewInit() {
      this.dataSource["sort"] = this.sort;
    }

    sortedData!: Desc176[];

    req: Desc176[] = [];

    totalElements: number = 0;
    tableSize: number = 4;
    tableSizes: any = [1, 3, 5, 7];
    itemsPerPage = 3
    totalItems: any;

    user: Desc176 = new Desc176('', '', '', ''); // данные вводимого пользователя
    value = 'Clear me';
    receivedUser!: Desc176; // полученный пользователь
    getDesc!: Desc176[];
    done: boolean = false;
    data: any;



      constructor(
          @Inject(MAT_DIALOG_DATA) public data1: Desc176,private httpService: HttpService,
          public dialogRef: MatDialogRef<ModalwindowComponent>,private route: ActivatedRoute
      ) {}
    ngOnInit(): void {

    }


    closeModal() {
      this.dialogRef.afterClosed();
      closeOnNavigation: true;
    }
    submit(user: Desc176) {
      this.httpService.postData(user)
        .subscribe({
          next: (data: any) => {
            this.receivedUser = data;

            this.done = true;

          },

          error: error => console.log(error)
        });
      }


    }



