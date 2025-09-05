import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribeBarComponent } from '../cta/subscribe-bar.component';

@Component({ selector:'app-pricing', standalone:true, imports:[CommonModule, SubscribeBarComponent], templateUrl:'./pricing.component.html', styleUrls:['./pricing.component.css'] })
export class PricingComponent {}