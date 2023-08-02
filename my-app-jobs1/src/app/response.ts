export class Responser{


  get id(): bigint {
    return this._id;
  }

  set id(value: bigint) {
    this._id = value;
  }

  get username(): number {
    return this.username;
  }

  set username(value: number) {
    this.username = value;
  }

  get statetime(): string {
    return this.statetime;
  }

  get state(): bigint {
    return this.state;
  }

  set state(value: bigint) {
    this.state = value;
  }




    constructor( username: number,statetime:string){



    }
  private _id!: bigint ;
  private _username!: number  ;
  private _statetime!: string ;
  private _state!: bigint ;
}
