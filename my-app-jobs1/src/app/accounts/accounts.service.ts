import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class AccountsService {


  code!:string ;


  baseURL:string = 'http://10.248.38.240:8081/accountspass?';

  constructor(private http:HttpClient) { }




  getService(pin: string): Observable<any> {


    return this.http.get(this.baseURL + "code="+pin)
  }


}
