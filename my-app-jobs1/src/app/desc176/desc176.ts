import { SchetOrStk } from "./SchetOrStk.enum";

export class Desc176 {
  [x: string]: any;
  results: any;
  desc176: any;
  totalItems:any;
  currentPage:any;

  text1!: string;
  theme1!: string;
  dateOfCreation1!: string;
  schetOrStk1!: SchetOrStk;






  constructor(public text:string, public theme:string,public dateOfCreation:string,public schetOrStk:string){}

}
