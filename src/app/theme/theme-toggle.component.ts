import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from './theme.service';
@Component({ selector:'app-theme-toggle', standalone:true, imports:[CommonModule], template:`
  <div style="display:flex;align-items:center;gap:8px">
    <div class='theme-toggle' role='switch' [attr.aria-checked]="ts.mode==='dark'" (click)="ts.toggle()" title="Toggle between dark (black) and light (white) mode"><div class='knob'></div></div>
    <span class="lead">{{ ts.mode==='dark' ? 'Dark' : 'Light' }} mode</span>
  </div>` })
export class ThemeToggleComponent{ constructor(public ts:ThemeService){} }