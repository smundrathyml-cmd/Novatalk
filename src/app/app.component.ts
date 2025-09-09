import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header.component';
import { FooterComponent } from './layout/footer.component';
import { ChatWidgetComponent } from './chat/chat-widget.component';
import { SubscribeBarComponent } from './cta/subscribe-bar.component';
@Component({ selector:'app-root', standalone:true, imports:[CommonModule,RouterOutlet,HeaderComponent,FooterComponent,ChatWidgetComponent,SubscribeBarComponent], template:`
  <app-header></app-header>
  <main class="container"><router-outlet></router-outlet></main>
  
  <app-footer></app-footer>
  <app-chat-widget></app-chat-widget>
`}) export class AppComponent{
  ngOnInit(){ document.documentElement.setAttribute('data-theme','dark'); }

}