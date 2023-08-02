import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appSidebar]',
  exportAs:'appSidebar'
})
export class SidebarDirective {

@HostBinding('class.is-open') click=false;
  constructor() { }


@HostListener('click') onClic(){
this.click=!this.click;
}
}


