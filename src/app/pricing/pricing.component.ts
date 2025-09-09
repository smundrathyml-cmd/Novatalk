import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribeBarComponent } from '../cta/subscribe-bar.component';
import { Router } from '@angular/router';
import { ContactUsComponent } from '../contactus/contactus.component';
import { RouterModule } from '@angular/router';


@Component({ selector:'app-pricing', standalone:true, imports:[CommonModule, SubscribeBarComponent, RouterModule], templateUrl:'./pricing.component.html', styleUrls:['./pricing.component.css'] })
export class PricingComponent {
      constructor(private router: Router) {}

    // billing: 'month' | 'year' = 'month';    // default
  private readonly discountPct = 20;      // 20% off when yearly
prices = {
  starter: 35,
  pro: 65
} as const;

billing: 'month' | 'year' = 'month';

setBilling(mode: 'month' | 'year') {
  this.billing = mode;
}

/** Price shown on the card, honoring the 20% yearly discount */
displayedPrice(plan: 'starter' | 'pro'): number {
  const base = this.prices[plan];
  return this.billing === 'year' ? Math.round(base * 0.8) : base;
}
  /** Base monthly prices (before any discount). */
  private readonly basePrices = {
    starter: 35,
    pro: 65,
  };

  /** Price shown in UI depending on billing toggle. */
  // displayedPrice(plan: 'starter' | 'pro'): number {
  //   const p = this.basePrices[plan];
  //   if (this.billing === 'year') {
  //     // 20% off monthly price (rounded to nearest dollar)
  //     return Math.round(p * (1 - this.discountPct / 100));
  //   }
  //   return p;
  // }

  // setBilling(mode: 'month' | 'year') {
  //   this.billing = mode;
  // }

  goToPricing() {
    // Navigate to your Pricing route/component
    this.router.navigate(['/pricing']);
  }
}