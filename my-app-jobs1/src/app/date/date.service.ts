import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';

@Injectable()



export class DateService {




    baseURL:string = 'http://10.248.38.240:8081/oracledate?';

  constructor(private http:HttpClient,private datePipe:DatePipe) { }




  getService(name: string,date:string): Observable<any> {


    return this.http.get(this.baseURL + "name="+name +'&date='+this.datePipe.transform(date,"MM.dd.yyyy"))
  }

}
