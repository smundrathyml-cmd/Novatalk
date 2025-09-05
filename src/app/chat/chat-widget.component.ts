import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

type Msg = { from:'bot'|'user', text:string, alt?:boolean };

@Component({
  selector: 'app-chat-widget',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-widget.component.html',
  styleUrls: ['./chat-widget.component.css']
})
export class ChatWidgetComponent implements OnInit {
  open = false;
  input = '';
  messages: Msg[] = [];
  quick: string[] = [];

  ngOnInit() {
    // Seed messages to mirror the “how msgs work” screen
    this.messages = [
      { from: 'bot', text: 'Hello there! It is nice to meet you!', alt: true },
      { from: 'bot', text: 'What are you up to today? Please use the chatbot to ask me anything. I am ready to listen.', alt: true }
    ];
    this.quick = ['What is Novatalk?', 'I have a question', 'I want to talk to customer service'];
  }

  toggle() { this.open = !this.open; }

  onQuick(choice: string) {
    // Show user chip
    this.messages.push({ from: 'user', text: choice, alt: true });

    // Simple scripted replies for demo parity
    if (choice === 'What is Novatalk?') {
      this.bot(
        'Novatalk is an agentic AI that helps customers and teams by answering questions, triggering workflows, and integrating with your systems.'
      );
    } else if (choice === 'I have a question') {
      this.bot('Please enter your email –');
    } else if (choice === 'I want to talk to customer service') {
      this.bot('Sure — connecting you to customer service. Meanwhile, share a brief summary of your issue.');
    }
  }

  send() {
    const t = this.input.trim();
    if (!t) return;

    // User message bubble
    this.messages.push({ from: 'user', text: t });

    // If last bot asked for email, simulate email chip + confirmation
    if (/please enter your email/i.test(this.lastBotText())) {
      this.messages.push({ from: 'user', text: t, alt: true }); // email chip
      this.bot("We've sent a link to your email. Please use that link to login.");
      this.quick = []; // hide chips afterward
    } else {
      // Generic acknowledgment
      this.bot('Thanks — got it!');
    }

    this.input = '';
  }

  private bot(text: string) {
    setTimeout(() => this.messages.push({ from: 'bot', text, alt: /email|hello there|what are you up to/i.test(text) }), 250);
  }

  private lastBotText(): string {
    for (let i = this.messages.length - 1; i >= 0; i--) {
      if (this.messages[i].from === 'bot') return this.messages[i].text;
    }
    return '';
  }
}
