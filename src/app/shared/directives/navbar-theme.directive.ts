import { AfterViewInit, Directive, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Directive({
  selector: '[appNavbarTheme]'
})
export class NavbarThemeDirective implements AfterViewInit {

  constructor(
    private el:ElementRef,
    private router: Router
  ) { 
    
    el.nativeElement.style.background = 'red';
  }

  ngAfterViewInit(){
    console.log(this.router.url);
  }

}
