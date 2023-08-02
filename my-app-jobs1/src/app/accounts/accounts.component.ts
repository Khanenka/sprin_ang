import { Component, OnInit } from '@angular/core';


import { Accounts } from './accounts';
import { AccountsService } from './accounts.service';



@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {
  dataSource: any;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
accounts!:Accounts[];
code!:string;
value = 'Clear me';




constructor(private acccountsService:AccountsService){

}




displayedColumns = ['description','id', 'balance','dateOfCreation','dateOfFirstUse','dateOfLastUse','expiryDate','validityPeriod','descpr']



public getAccountsByIP(){

this.acccountsService.getService(this.code)
.subscribe(
  (result)=>{
    console.log(result)
    this.accounts = result;



  }

)

}

element:boolean = false;
  showData() {
    return (this.element = true);
  }
  hideData() {
    return (this.element = false);
  }



}


