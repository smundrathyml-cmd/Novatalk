import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribeBarComponent } from '../cta/subscribe-bar.component';


@Component({ selector:'app-integrations', standalone:true, imports:[CommonModule, SubscribeBarComponent], templateUrl:'./integrations.component.html', styleUrls:['./integrations.component.css'] })
export class IntegrationsComponent {}