import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SaccountsService {








baseURL:string = 'http://10.248.38.240:8081/saccountspass?';

constructor(private http:HttpClient) { }

getService(pin: string): Observable<any> {


  return this.http.get(this.baseURL + "accountID="+pin)
}



}
