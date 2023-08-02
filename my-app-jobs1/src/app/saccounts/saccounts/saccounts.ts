export class Saccounts {


    get id(): bigint {
      return this._id;
    }

    set id(value: bigint) {
      this.id = value;
    }

    get accountID(): string {
      return this._accountID;
    }

    set accountID(value: string) {
      this.accountID = value;
    }


    set phone(value: string) {
      this.phone = value;
    }



    set pin(value: string) {
      this.pin = value;
    }
    set puk(value: string) {
      this.puk = value;
    }

    get state(): number {
      return this.state;
    }
    set state(value: number) {
      this.state = value;
    }


    set creationDate(value: Date) {
      this.creationDate = value;
    }
    get creationDate(): Date {
      return this.creationDate;
    }



    set activationDate(value: Date) {
      this.activationDate = value;
    }
    get activationDate(): Date {
      return this.activationDate;
    }

    set testdate(value: Date) {
      this.testdate = value;
    }
    get testdate(): Date {
      return this.testdate;
    }

    set disableDate(value: Date) {
      this.disableDate = value;
    }
    get disableDate(): Date {
      return this.disableDate;
    }

    set rechargeDate(value: Date) {
      this.rechargeDate = value;
    }
    get rechargeDate(): Date {
      return this.rechargeDate;
    }

    get balance(): number {
      return this.balance;
    }
    set balance(value: number) {
      this.balance = value;
    }


    get cos(): number {
      return this.cos;
    }

    set cos(value: number) {
      this.cos = value;
    }

    get wbl(): number {
      return this.wbl;
    }

    set wbl(value: number) {
      this.wbl = value;
    }


    get svc(): number {
      return this.svc;
    }

    set svc(value: number) {
      this.svc = value;
    }


    set dateOfLock(value: Date) {
      this.dateOfLock = value;
    }
    get dateOfLock(): Date {
      return this.dateOfLock;
    }

    set operater(value: String) {
      this.operater = value;
    }
    get operater(): String {
      return this.operater;
    }


    get locked(): number {
      return this.locked;
    }

    set locked(value: number) {
      this.locked = value;
    }


    get parentID(): number {
      return this.parentID;
    }

    set parentID(value: number) {
      this.parentID = value;
    }


    set description(value: String) {
      this.description = value;
    }
    get description(): String {
      return this.description;
    }




    set codeX(value: String) {
      this.codeX = value;
    }
    get codeX(): String {
      return this.codeX;
    }

    set name(value: String) {
      this.name = value;
    }
    get name(): String {
      return this.name;
    }

    set address(value: String) {
      this.address = value;
    }
    get address(): String {
      return this.address;
    }




      constructor(accountID: string){



      }

      private _id!:bigint;


      private  _accountID!:string;

      private  _description!:string;

      private  userID!:number;


      private  _pin!:string;


      private  _state!:number;


      private  _creationDate!:number;


      private  _activationDate!:number;

      private  expirationDate!:Date;

      private  _testdate!:Date;


      private  _disableDate!:Date;


      private  _rechargeDate!:Date;


      private  _balance!:number;


      private  _cos!:number;


      private  _wbl!:number;


      private  _svc!:number;


      private  _locked!:number;


      private  _dateOfLock!:Date;


      private  _parentID!:number;

      private  _rues_Code!:string;



      private  descpr!:string;

      private  _name!:string;

      private  _address!:string;

    }


