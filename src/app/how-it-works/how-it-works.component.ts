
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribeBarComponent } from '../cta/subscribe-bar.component';

@Component({
  selector:'app-how-it-works',
  standalone:true,
  imports:[CommonModule, SubscribeBarComponent],
  templateUrl:'./how-it-works.component.html', styleUrls:['./how-it-works.component.css'] })
export class HowItWorksComponent{
  steps = [
    { title:'Connect Your Systems', desc:'Securely link CRM, ERP, ticketing, and data stores with one hub.'},
    { title:'Train with Your Data', desc:'Ingest docs, manuals, SOPs; the bot learns context & terminology.'},
    { title:'Launch Anywhere', desc:'Website, WhatsApp, Slack, mobile — one brain, many channels.'},
    { title:'Analyze & Improve', desc:'Dashboards track satisfaction, topics, and escalations to refine ops.'}
  ];
}
