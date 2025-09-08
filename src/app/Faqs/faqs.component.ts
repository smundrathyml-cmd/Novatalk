import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, RouterModule } from '@angular/router';
import { SubscribeBarComponent } from '../cta/subscribe-bar.component';

@Component({
  selector: 'app-faqs',
  standalone: true,
  imports: [CommonModule, RouterModule, SubscribeBarComponent],
  templateUrl: './faqs.component.html',
  styleUrls:['./faqs.component.css'],
  
})
export class FaqsComponent {

    faqsOpen = false;
    openFaqIndex: number | null = null;

toggleFaq(i: number, e: Event){
  e.preventDefault(); // prevent the native <details> auto-toggle
  this.openFaqIndex = (this.openFaqIndex === i) ? null : i;
}
faqs = [
    { q: 'What is NovaTalk Bot?', aList: [
      'Agentic AI that executes multi-step tasks',
      'Delivers context-aware insights',
      'Acts like a digital team member'
    ]},
    { q: 'What makes NovaTalk different?', aList: [
      'Deep system integrations',
      'Automated workflows',
      'Continuous learning for precise outputs'
    ]},
    { q: 'How does it integrate?', a: 'Real-time connectors to ERP, CRM, ticketing, inventory, and custom systems with compliance.' },
    { q: 'Can it handle complex workflows?', a: 'Yes — autonomous multi-step processes reduce Level 1 load.' },
    { q: 'How does it ensure accuracy?', a: 'Enterprise-trained LLMs with RAG + continual learning.' },
    { q: 'Is multilingual supported?', a: 'Yes, high-quality context-aware interactions across languages.' },
    { q: 'Is it secure?', a: 'Runs within your environment; encryption and global data privacy compliance.' },
    { q: 'Does it personalize?', a: 'Remembers interactions and adapts to user workflows.' },
    { q: 'How fast to implement?', a: 'Rapid deployment via pre-built connectors and APIs.' },
    { q: 'What value does it bring?', a: 'Automates workflows, reduces bottlenecks, and improves engagement and scale.' }
  ];

 
}
