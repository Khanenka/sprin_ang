import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsbyidService {

  id!:number;


  baseURL:string = 'http://10.248.38.240:8081/accountbynumber?';

  constructor(private http:HttpClient) { }




  getService(id: number): Observable<any> {


    return this.http.get(this.baseURL + "id="+id)
  }

}
