

import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Desc176 } from "./desc176";






@Injectable()
export class HttpService {



  constructor(private http: HttpClient) { }

  postData(user: Desc176): Observable<Desc176> {

    const hh = { headers: new HttpHeaders({ 'Content-type': 'application/json' }) }


    const body = { text: user.text, theme: user.theme, schetOrStk: user.schetOrStk, dateOfCreation: user.dateOfCreation };
    console.log(body)

    return this.http.post<Desc176>('http://10.248.38.240:8081/savedesc176', body, hh);
  }


  getData(): Observable<Desc176> {

    return this.http.get<Desc176>('http://10.248.38.240:8081/getalldesc176');
  }

  getPageable(text:string,page:number,size:number): Observable<Desc176> {

    return this.http.get<Desc176>('http://10.248.38.240:8081/getdesc176?'+'&text='+text+'&page='+page+'&size='+size);
  }


}
