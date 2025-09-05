import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { ThemeToggleComponent } from '../theme/theme-toggle.component';
@Component({ selector:'app-header', standalone:true, imports:[CommonModule,RouterModule,ThemeToggleComponent], templateUrl:'./header.component.html' })
export class HeaderComponent{
  active='/';

  intOpen=false;
  resOpen = false;

  constructor(private router:Router){
    this.router.events.subscribe(ev=>{ if(ev instanceof NavigationEnd){ this.active=ev.urlAfterRedirects; this.intOpen=false; } });
    document.addEventListener('click',(e)=>{ if(this.intOpen){ const t=e.target as HTMLElement; if(!t.closest('.int')) this.intOpen=false; } });
  }
  open(){ this.intOpen=true; }
  close(){ this.intOpen=false; }
  gotoAll(){ this.intOpen=false; this.router.navigateByUrl('/integrations'); }
}