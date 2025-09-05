import { Component, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribeBarComponent } from '../cta/subscribe-bar.component';


@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, SubscribeBarComponent],
  templateUrl:'./features.component.html', styleUrls:['./features.component.css'] })
export class FeaturesComponent {
  @ViewChildren('flowCard') cards!: QueryList<ElementRef<HTMLElement>>;
  activeIndex = 0;

  feats = [
    { id:'f1', img:'/assets/features/real-time-moderation-compliance-enforcement.jpeg', title:'Real-Time Moderation & Compliance Enforcement', desc:'Monitors chats, forums, and interactions for harmful or non-compliant content. Instantly flags risks, enforces rules, and keeps engagement safe while protecting brand reputation.' },
    { id:'f2', img:'/assets/features/ai-powered-business-knowledge-hub.jpeg', title:'AI-Powered Business Knowledge Hub', desc:'Acts as a central brain for your organization, capable of answering questions from every area of the business — from product specs to operational procedures, sales policies, and more.' },
    { id:'f3', img:'/assets/features/internal-system-integration.png', title:'Internal System Integration', desc:'Connects with CRMs, ERPs, support tools, and inventory platforms. Fetches, updates, and shares critical information instantly — reducing friction and keeping operations moving.' },
    { id:'f4', img:'/assets/features/24x7-customer-engagement.jpeg', title:'24/7 Customer Engagement', desc:'Always active, answering questions, resolving requests, and escalating complex issues to human agents without delays — keeping customers satisfied around the clock.' },
    { id:'f5', img:'/assets/features/personalized-responses-recommendations.png', title:'Personalized Responses & Recommendations', desc:'Recognizes returning customers, recalls past interactions, and delivers responses or recommendations that fit user history and preferences — creating meaningful, relationship-focused engagement.' },
    { id:'f6', img:'/assets/features/multilingual-support.jpeg', title:'Multilingual Support', desc:'Communicates in multiple languages to serve global customers, breaking language barriers and delivering consistent, high-quality interactions without extra staff.' },
    { id:'f7', img:'/assets/features/omnichannel-presence.jpeg', title:'Omnichannel Presence', desc:'Integrates across websites, mobile apps, email, social media, and messaging platforms like WhatsApp or Slack — ensuring customers engage wherever they are.' },
    { id:'f8', img:'/assets/features/analytics-insights-dashboard.jpeg', title:'Analytics & Insights Dashboard', desc:'Tracks conversation trends, frequent questions, satisfaction scores, and escalations. Delivers insights that help improve operations, service quality, and product offerings.' },
    { id:'f9', img:'/assets/features/secure-privacy-compliant.png', title:'Secure & Privacy-Compliant', desc:'Uses enterprise-grade encryption and follows global data regulations, keeping sensitive business and customer information protected at all times.' }
  ];

  onHoverNav(i: number) {
    this.activeIndex = i;
    const el = this.cards?.get(i)?.nativeElement;
    el?.scrollIntoView({ behavior: 'smooth', inline: 'start', block: 'nearest' });
  }
}
