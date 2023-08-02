import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Saccounts } from '../../saccounts/saccounts';
import { SaccountsnumberService } from './saccountsnumber.service';

@Component({
  selector: 'app-saccountsnumber',
  templateUrl: './saccountsnumber.component.html',
  styleUrls: ['./saccountsnumber.component.css']
})
export class SaccountsnumberComponent implements OnInit {


  saccounts!: Saccounts[];
  id!: number;
  value = 'Clear me';
  displayedColumns = ['description','id', 'balance','creationDate','activationDate','expirationDate','rechargeDate','descpr','phone']

  constructor(private sacccountsService:SaccountsnumberService){

  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public getSAccountsByNumber() {

    this.sacccountsService.getService(this.id)
      .subscribe(
        (result: any) => {
          console.log(this.id)
          console.log(result)

          this.saccounts = result;



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


export class InputErrorStateMatcherExample {
  emailFormControl = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
