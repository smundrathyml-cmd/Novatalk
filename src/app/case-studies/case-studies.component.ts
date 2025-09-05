import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SubscribeBarComponent } from '../cta/subscribe-bar.component';

@Component({
  selector: 'app-case-studies',
  standalone: true,
  imports: [CommonModule, RouterModule, SubscribeBarComponent],
  templateUrl: './case-studies.component.html',
  styles: [] // add a .css file later if you want; then switch to styleUrls
})
export class CaseStudiesComponent {}
