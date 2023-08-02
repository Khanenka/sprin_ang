

import { Component, Input, OnInit, ViewChild, Inject } from "@angular/core";
import { map } from "rxjs";

import { Desc176 } from "./desc176";
import { HttpService } from "./desc176.service";
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from "@angular/material/sort";
import { MatDialog, MatDialogRef } from "@angular/material/dialog";
import { ModalwindowComponent } from "./modalwindow/modalwindow/modalwindow.component";










@Component({
  selector: 'app-desc176',
  templateUrl: './desc176.component.html',
  styleUrls: ['./desc176.component.css']

})
export class Desc176Component implements OnInit {
  response: any;
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
  @Input() size = 5;
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
  constructor(private httpService: HttpService,private dialog: MatDialog) {
  }

  showExamplePrompt(): void {
    const timeout = 3000;
    const dialogRef = this.dialog.open(ModalwindowComponent, { width: '700px',height: '500px' });


  }

  visible:boolean = false;
  element:boolean = false;
  name:string='Показать подсказку'
  showLo(){
    this.visible = !this.visible

    this.name = 'Убрать подсказку'
  }

  showData() {
    return (this.element = true);
  }
  hideData() {
    return (this.element = false);
  }

  ngOnDestroy(){
    if(this.dialog !== null) this.dialog.closeAll()
   }

  ngOnInit(): void {
    this.getPage(this.text, this.page, this.size);

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
    //
  }


  print() {
    this.httpService.getData().pipe(map(i => i.results))
      .subscribe({

        next: (data: any) => {
          this.Desc = data.data;
console.log(data.data)


        }
      })

  }
  displayedColumns = ['text', 'theme', 'schetOrStk','dateOfCreation'];
  lengthPage!: number;
  pageIndex !: number;
  sorting!: MatSort;

  getPage(text: string, page: number, size: number) {
    this.httpService.getPageable(text, page, size)
      .subscribe(

        data => {


          this.req = data.desc176;
          this.lengthPage = data.totalItems;
          this.pageIndex = data.currentPage;

          this.sortData(this.sorting);



        })

  }





  pageSizeOptions = [2, 5, 10];

  pageSize =5;


  showFirstLastButtons = true;

  handlePageEvent(event: PageEvent,) {
    this.lengthPage = event.length;
    this.size = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.getPage(this.text, this.pageIndex, this.size);

console.log( this.getPage(this.text, this.pageIndex, this.size))

  }



  getPageDetails(event:any) {
    console.log(event);
  }





  sortData(sort: Sort) {

    this.sortedData = this.req.slice();
    const data = this.req.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;


      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';

      switch (sort.active) {
        case 'theme':
          return compare(a.theme, b.theme, isAsc);
        case 'text':
          return compare(a.text, b.text, isAsc);
        case 'schetOrStk':
          return compare(a.schetOrStk, b.schetOrStk, isAsc);
          case 'dateOfCreation':
            return compare(a.dateOfCreation, b.dateOfCreation, isAsc);
        default:
          return this.data.desc176;
      }
    });
  }
}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}














