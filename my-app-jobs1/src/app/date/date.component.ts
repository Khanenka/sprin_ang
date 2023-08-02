import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Responser } from '../response';
import { DateService } from './date.service';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css']
})
export class DateComponent implements OnInit {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
response!:Responser[];

name!:string;
date!:string;

constructor(private dateService:DateService){

}

public getTable(){

this.dateService.getService(this.name,this.date)
.subscribe(
  (result)=>{
    console.log(result)
    this.response = result;
  }
)

}

 }


