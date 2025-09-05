import { Injectable } from '@angular/core';
const KEY='novatalk-theme';
@Injectable({providedIn:'root'}) export class ThemeService{
  private _mode:'dark'|'light'='dark';
  constructor(){ const s=localStorage.getItem(KEY) as any; this._mode=s ?? 'dark'; this.apply(); }
  get mode(){ return this._mode; }
  toggle(){ this._mode=this._mode==='dark'?'light':'dark'; localStorage.setItem(KEY,this._mode); this.apply(); }
  private apply(){ document.documentElement.dataset.theme=this._mode; }
}