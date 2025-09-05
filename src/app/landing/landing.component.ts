import { Component, OnInit, AfterViewInit, OnDestroy, ElementRef, ViewChild, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SubscribeBarComponent } from '../cta/subscribe-bar.component';
import { Router } from '@angular/router';


type Side = 'left' | 'right';
type ChatMsg = {
  text: string;
  from: 'user' | 'bot';
  hint?: string;
  hintSide?: Side;
  label?: string;           // NEW: optional inline label for hero chat bubbles
};

@Component({
  selector:'app-landing',
  standalone:true,
  imports:[CommonModule, RouterModule, SubscribeBarComponent],
  templateUrl:'./landing.component.html', styleUrls:['./landing.component.css'] })

export class LandingComponent implements OnInit, AfterViewInit, OnDestroy {

  // kept from original (not used by outside overlay logic)
  bubbleVisible = false;
  bubbleTop = 0;
  bubbleSide: Side = 'left';
  bubbleText = '';
  private bubbleScript: { side: Side; top: number; text: string }[] = [
    { side: 'left',  top: 50,  text: 'Sales and feedback' },
    { side: 'right', top: 120, text: 'Report generation' },
    { side: 'left',  top: 210, text: 'Multi-language support' },
    { side: 'right', top: 290, text: 'Automated actions' },
    { side: 'left',  top: 360, text: 'Insights & trends' },
    { side: 'right', top: 430, text: 'Suggest improvements' },
    { side: 'left',  top: 500, text: 'Export & share' },
    { side: 'right', top: 560, text: 'Choose format' },
    { side: 'left',  top: 620, text: 'Confirm' },
    { side: 'right', top: 680, text: 'Done — repeat' },
  ];

  constructor(private router: Router) {}

  goFeature(id: string) {
  this.router.navigate(['/features'], { fragment: id });
}

  Math = Math;

  // ===== DEMO CHAT (with outside hint overlay) =====
  @ViewChild('chatBody') chatBody!: ElementRef<HTMLDivElement>;
  @ViewChild('chatBox')  chatBox!:  ElementRef<HTMLDivElement>;
  @ViewChild('demoWrap') demoWrap!: ElementRef<HTMLDivElement>;
  @ViewChildren('msgRow') msgRows!: QueryList<ElementRef<HTMLDivElement>>;

  messages: ChatMsg[] = [];
  steps: ChatMsg[] = [
    { text:"Business User: I need last month’s sales and customer feedback.", from:'user' },
    { text:"NovaTalk: Done. Total sales, top products, and key feedback trends summarized.", from:'bot',
      hint:"Pulled sales + feedback, summarized patterns so you don’t scan raw data.", hintSide:'left' },
    { text:"Business User: Break it down by region.", from:'user' },
    { text:"NovaTalk: North: $120K, East: $95K, South: $110K, West: $80K. Highest satisfaction: North.", from:'bot',
      hint:"Regional split of revenue + satisfaction; North leads on both metrics.", hintSide:'right' },
    { text:"Business User: Recurring complaints?", from:'user' },
    { text:"NovaTalk: Delayed deliveries and packaging. Suggested actions: optimize shipping and improve packaging.", from:'bot',
      hint:"Top issues identified with recommended remediation steps.", hintSide:'left' },
    { text:"Business User: Export it.", from:'user' },
    { text:"NovaTalk: PDF and Excel sent to your inbox. Include summary chart?", from:'bot',
      hint:"Exports created; can append a chart for quick sharing.", hintSide:'right' },
    { text:"Business User: Yes.", from:'user' },
    { text:"NovaTalk: Done. Chart included. Anything else to analyze?", from:'bot',
      hint:"Report finalized with chart; ready for follow-up analysis.", hintSide:'left' }
  ];

  // ONLY one outside hint at a time (for the message currently centered)
  outsideHints: { top: number; left?: number; right?: number; text: string; x: number; side: Side }[] = [];

  logos = ['/assets/logo1.png','/assets/logo2.png','/assets/logo3.png','/assets/logo4.jpg', '/assets/logo5.png', '/assets/logo.6.png'];

  featureCards = [
  {
    id: 'real-time-moderation-compliance-enforcement',
    img: '/assets/features/real-time-moderation-compliance-enforcement.jpeg',
    title: 'Real-Time Moderation & Compliance Enforcement',
    desc: 'Monitors chats, forums, and interactions for harmful or non-compliant content. Instantly flags risks, enforces rules, and keeps engagement safe while protecting brand reputation.'
  },
  {
    id: 'ai-powered-business-knowledge-hub',
    img: '/assets/features/ai-powered-business-knowledge-hub.jpeg',
    title: 'AI-Powered Business Knowledge Hub',
    desc: 'Acts as a central brain for your organization. Answers questions from product specs to policies with accurate, context-aware responses while tracking previous interactions.'
  },
  {
    id: 'internal-system-integration',
    img: '/assets/features/internal-system-integration.png',
    title: 'Internal System Integration',
    desc: 'Connects with CRMs, ERPs, support tools, and inventory platforms. Fetches, updates, and shares critical information instantly — reducing friction and keeping operations moving.'
  },
  {
    id: '24x7-customer-engagement',
    img: '/assets/features/24x7-customer-engagement.jpeg',
    title: '24/7 Customer Engagement',
    desc: 'Always active, answering questions, resolving requests, and escalating complex issues to human agents without delays — keeping customers satisfied around the clock.'
  },
  {
    id: 'personalized-responses-recommendations',
    img: '/assets/features/personalized-responses-recommendations.png',
    title: 'Personalized Responses & Recommendations',
    desc: 'Recognizes returning customers, recalls past interactions, and delivers responses or recommendations that fit user history and preferences — creating meaningful, relationship-focused engagement.'
  },
  {
    id: 'multilingual-support',
    img: '/assets/features/multilingual-support.jpeg',
    title: 'Multilingual Support',
    desc: 'Communicates in multiple languages to serve global customers, breaking language barriers and delivering consistent, high-quality interactions without extra staff.'
  },
  {
    id: 'omnichannel-presence',
    img: '/assets/features/omnichannel-presence.jpeg',
    title: 'Omnichannel Presence',
    desc: 'Integrates across websites, mobile apps, email, social media, and messaging platforms like WhatsApp or Slack — ensuring customers engage wherever they are.'
  },
  {
    id: 'analytics-insights-dashboard',
    img: '/assets/features/analytics-insights-dashboard.jpeg',
    title: 'Analytics & Insights Dashboard',
    desc: 'Tracks conversation trends, frequent questions, satisfaction scores, and escalations. Delivers insights that help improve operations, service quality, and product offerings.'
  },
  {
    id: 'secure-privacy-compliant',
    img: '/assets/features/secure-privacy-compliant.png',
    title: 'Secure & Privacy-Compliant',
    desc: 'Uses enterprise-grade encryption and follows global data regulations, keeping sensitive business and customer information protected at all times.'
  }
];
hoveredPricing = 1;                       // default: center card focused
billing: 'month' | 'year' = 'year';       // just for the pills’ active style

onPriceHover(i: number) { this.hoveredPricing = i; }
onPriceLeave()        { this.hoveredPricing = 1; }

  testimonials = [
    { stars:'★★★★★', text:'NovaTalk handles messages instantly, flags potential risks, and suggests next steps. It’s like having a team working 24/7.', author:'Ethan Navarro' },
    { stars:'★★★★★', text:'All our systems connect seamlessly. NovaTalk pulls data in real time for accurate answers.', author:'Jasper Lin' },
    { stars:'★★★★★', text:'Customer questions don’t pile up anymore. Multilingual, always available.', author:'Mason Caldwell' },
    { stars:'★★★★★', text:'Every conversation provides insights. Trends and risks are flagged; decisions are faster.', author:'Alice Thornton' },
    { stars:'★★★★★', text:'Returning interactions feel personal. Safety and compliance built in.', author:'Oliver Brant' },
    { stars:'★★★★★', text:'Across apps and channels, updates are instant so our team focuses on priorities.', author:'Lukas Moreau' }
  ];

  featPage = 0;
  featurePages: any[][] = [];
  testPage = 0;
  testPages: any[][] = [];
  faqsOpen = false;
  botAvatar = 'assets/Novatalk.png';
  userAvatar = 'assets/ellipse.svg';
  // autoscroll helpers (DEMO CHAT)
  private stickToBottom = true;
  private mo?: MutationObserver;
  private onResize = () => this.layoutOutsideHintForCenter();

  // NEW: dwell control for hint switching
  private hintDwellMs = 2000;
  private currentHintIdx: number | null = null;
  private lastHintSwitchAt = 0;

  // ===== HERO CHAT (new fixed rectangle under Free trial meta) =====
  @ViewChild('heroChatBody') heroChatBody!: ElementRef<HTMLDivElement>;

  heroChatMsgs: ChatMsg[] = [];
  private heroScript: ChatMsg[] = [
    { from: 'user', label: 'Ellie Andrews', text: 'Hi I need your urgent assistance.' },
    { from: 'bot',  label: 'Novatalk',      text: 'Yes, Ellie tell me what is bothering you today?' },
    { from: 'user', label: 'Ellie Andrews', text: 'Please pull me the latest order data of this user - John Michael. Premium user.' },
    { from: 'bot',  label: 'Novatalk',      text: 'Hi Ellie, John has purchased a PS5 on July 21, 2025 09:01 AM at the price of $3251.' },
    { from: 'user', label: 'Ellie Andrews', text: 'Great, thanks!' }
  ];
  private heroIdx = 0;
  private heroTimer?: any;

  ngOnInit(): void {
    // loop chat demo
    let i = 0;
    const run = () => {
      this.addMessage(this.steps[i]);
      i = (i + 1) % this.steps.length;
      setTimeout(run, 1200);
      if (this.messages.length > 8) this.messages.shift();
    };
    run();

    const pageSize = 3;
    for (let k = 0; k < this.featureCards.length; k += pageSize) {
      this.featurePages.push(this.featureCards.slice(k, k + pageSize));
    }
    for (let k = 0; k < this.testimonials.length; k += pageSize) {
      this.testPages.push(this.testimonials.slice(k, k + pageSize));
    }
  }

  ngAfterViewInit(): void {
    // DEMO chat init
    const el = this.chatBody?.nativeElement;
    if (el) {
      this.scrollToBottom();
      this.layoutOutsideHintForCenter();

      el.addEventListener('scroll', () => {
        const nearBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 40;
        this.stickToBottom = nearBottom;
        this.layoutOutsideHintForCenter();
      }, { passive: true });

      this.mo = new MutationObserver(() => {
        if (this.stickToBottom) this.scrollToBottom();
        this.layoutOutsideHintForCenter();
      });
      this.mo.observe(el, { childList: true, subtree: true });

      this.msgRows.changes.subscribe(() => setTimeout(() => this.layoutOutsideHintForCenter()));
      window.addEventListener('resize', this.onResize, { passive: true });
    }

    // HERO chat init
    this.playHeroChat();
  }

  ngOnDestroy(): void {
    this.mo?.disconnect();
    window.removeEventListener('resize', this.onResize);
    if (this.heroTimer) {
      clearTimeout(this.heroTimer);
      this.heroTimer = undefined;
    }
  }

  // ===== DEMO CHAT helpers =====
  addMessage(m: ChatMsg) {
    this.messages = [...this.messages, m];
    setTimeout(() => {
      if (this.stickToBottom) this.scrollToBottom();
      this.layoutOutsideHintForCenter();
    });
  }

  private scrollToBottom() {
    const el = this.chatBody?.nativeElement;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
  }

  /** Show ONE hint: the closest message to the vertical center of the chat body,
   * and keep it visible for a dwell time before switching to a new one.
   */
  private layoutOutsideHintForCenter() {
    const wrap = this.demoWrap?.nativeElement;
    const body = this.chatBody?.nativeElement;
    const box  = this.chatBox?.nativeElement;
    if (!wrap || !body || !box) return;

    const wrapRect = wrap.getBoundingClientRect();
    const bodyRect = body.getBoundingClientRect();
    const boxRect  = box.getBoundingClientRect();

    const centerY = bodyRect.top + bodyRect.height / 2;

    const rows = this.msgRows?.toArray() || [];
    if (!rows.length) { this.outsideHints = []; this.currentHintIdx = null; return; }

    // find row whose center is nearest to chat body's vertical center
    let bestIdx = -1;
    let bestDist = Number.POSITIVE_INFINITY;
    rows.forEach((ref, idx) => {
      const r = ref.nativeElement.getBoundingClientRect();
      const rowCenter = r.top + r.height / 2;
      const dist = Math.abs(rowCenter - centerY);
      if (dist < bestDist) { bestDist = dist; bestIdx = idx; }
    });

    const nearestMsg = this.messages[bestIdx];
    const nearestHasHint = !!nearestMsg && nearestMsg.from === 'bot' && !!nearestMsg.hint;

    const now = Date.now();
    let idxToRender: number | null = null;

    if (this.currentHintIdx !== null) {
      const currentMsg = this.messages[this.currentHintIdx];
      const currentStillValid =
        !!currentMsg && currentMsg.from === 'bot' && !!currentMsg.hint &&
        this.currentHintIdx < rows.length;

      if ((bestIdx !== this.currentHintIdx) && (now - this.lastHintSwitchAt >= this.hintDwellMs)) {
        if (nearestHasHint) {
          this.currentHintIdx = bestIdx;
          this.lastHintSwitchAt = now;
          idxToRender = this.currentHintIdx;
        } else if (currentStillValid) {
          idxToRender = this.currentHintIdx;
        } else {
          this.currentHintIdx = null;
          idxToRender = null;
        }
      } else {
        if (currentStillValid) {
          idxToRender = this.currentHintIdx;
        } else if (nearestHasHint) {
          this.currentHintIdx = bestIdx;
          this.lastHintSwitchAt = now;
          idxToRender = this.currentHintIdx;
        } else {
          idxToRender = null;
        }
      }
    } else {
      if (nearestHasHint) {
        this.currentHintIdx = bestIdx;
        this.lastHintSwitchAt = now;
        idxToRender = this.currentHintIdx;
      } else {
        idxToRender = null;
      }
    }

    if (idxToRender === null) { this.outsideHints = []; return; }

    const m = this.messages[idxToRender]!;
    const rowRect = rows[idxToRender].nativeElement.getBoundingClientRect();
    const top = rowRect.top - wrapRect.top + 4;

    // anchors for outside bubble
    const bubbleW = 260;
const gutter  = 8;

const leftX  = boxRect.left - wrapRect.left - bubbleW - gutter;  // outside to the left
const rightX = boxRect.right - wrapRect.left + gutter;           // outside to the right

const side: Side = m.hintSide ?? 'left';
this.outsideHints = [
  side === 'left'
    ? { top, x: leftX,  side: 'left',  text: m.hint! }
    : { top, x: rightX, side: 'right', text: m.hint! }
];

  }

  // ===== HERO CHAT autoplay =====
  private playHeroChat() {
    // reset
    this.heroChatMsgs = [];
    this.heroIdx = 0;

    const step = () => {
      if (this.heroIdx < this.heroScript.length) {
        this.heroChatMsgs = [...this.heroChatMsgs, this.heroScript[this.heroIdx++]];
        setTimeout(() => this.scrollHeroToBottom(), 0);
        this.heroTimer = setTimeout(step, 1100);
      } else {
        // pause then loop again
        this.heroTimer = setTimeout(() => this.playHeroChat(), 2200);
      }
    };

    step();
  }

  private scrollHeroToBottom() {
    const el = this.heroChatBody?.nativeElement;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }
}
