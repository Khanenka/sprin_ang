import { Component, OnInit } from '@angular/core';
import { Accounts } from '../accounts';
import { AccountsbyidService } from './accountsbyid.service';

@Component({
  selector: 'app-accountsbyid',
  templateUrl: './accountsbyid.component.html',
  styleUrls: ['./accountsbyid.component.css']
})

export class AccountsbyidComponent implements OnInit {

  dataSource: any;

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  accounts!: Accounts[];
  id!: number;
  value = 'Clear me';

  displayedColumns = ['description','id', 'balance','dateOfCreation','dateOfFirstUse','dateOfLastUse','expiryDate','validityPeriod','descpr']

  columnsToDisplayWithExpand = [...this.displayedColumns, 'expand'];

  expandedElement!: Accounts | null;


  constructor(private acccountsService: AccountsbyidService) {

  }






  public getAccountsByNumber() {


    this.acccountsService.getService(this.id)
      .subscribe(
        (result) => {
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

