export class Accounts {

  get id(): bigint {
    return this._id;
  }

  set id(value: bigint) {
    this.id = value;
  }

  get balance(): number {
    return this._balance;
  }

  set balance(value: number) {
    this.balance = value;
  }



  set code(value: number) {
    this.code = value;
  }

  get type(): String {
    return this.type;
  }

  set dateOfCreation(value: number) {
    this.dateOfCreation = value;
  }
  get dateOfCreation(): number {
    return this.dateOfCreation;
  }


  set dateOfFirstUse(value: Date) {
    this.dateOfFirstUse = value;
  }
  get dateOfFirstUse(): Date {
    return this.dateOfFirstUse;
  }

  set dateOfLastUse(value: Date) {
    this.dateOfLastUse = value;
  }
  get dateOfLastUse(): Date {
    return this.dateOfLastUse;
  }

  get status(): number {
    return this.status;
  }

  set status(value: number) {
    this.status = value;
  }

  get locked(): number {
    return this.locked;
  }

  set locked(value: number) {
    this.locked = value;
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


  get flag(): number {
    return this.flag;
  }

  set flag(value: number) {
    this.flag = value;
  }


  set expiryDate(value: Date) {
    this.expiryDate = value;
  }
  get expiryDate(): Date {
    return this.expiryDate;
  }


  get validityPeriod(): number {
    return this.validityPeriod;
  }

  set validityPeriod(value: number) {
    this.validityPeriod = value;
  }

  get cos(): number {
    return this.cos;
  }

  set cos(value: number) {
    this.cos = value;
  }


  get distributerId(): number {
    return this.distributerId;
  }

  set distributerId(value: number) {
    this.distributerId = value;
  }


  set codeX(value: String) {
    this.codeX = value;
  }
  get codeX(): String {
    return this.codeX;
  }

  set description(value: String) {
    this.description = value;
  }
  get description(): String {
    return this.description;
  }
  set descpr(value: String) {
    this.descpr = value;
  }
  get descpr(): String {
    return this.descpr;
  }

  set name(value: String) {
    this.name = value;
  }
  get name(): String {
    return this.name;
  }


    constructor(pin: string){



    }

    private _id!:bigint;


    private  _balance!:number;

    private  _description!:string;


    private  _code!:string;


    private  _type!:number;


    private  _dateOfCreation!:number;


    private  _dateOfFirstUse!:Date;


    private  _dateOfLastUse!:Date;


    private  _status!:number;


    private  _locked!:number;


    private  _dateOfLock!:Date;


    private  _operater!:String;


    private  _flag!:number;


    private  _expiryDate!:Date;


    private  _validityPeriod!:number;


    private  _cos!:number;


    private  _distributerId!:number;


    private  _codeX!:String;

    private  _descpr!:String;

    private  _name!:String;


  }
