import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscribeBarComponent } from '../cta/subscribe-bar.component';
import { RouterModule, Router, NavigationEnd, Routes } from '@angular/router';
import { CaseStudiesComponent } from '../case-studies/case-studies.component';




interface Post {
  title: string;
  author: string;
  date: string;
  minutes: number;
  category: string;
  excerpt: string;
}

@Component({
  selector: 'app-resources',
  standalone: true,
  imports: [CommonModule, SubscribeBarComponent, RouterModule],
  templateUrl:'./resources.component.html', styleUrls:['./resources.component.css'] })


export class ResourcesComponent {
  posts: Post[] = Array.from({ length: 6 }).map((_, i) => ({
    title: 'Learning to use AI chat in this modern age',
    author: 'Liz Golding',
    date: 'Aug 11, 2025',
    minutes: 6,
    category: ['Category 1', 'Category 2', 'Category 3'][i % 3],
    excerpt:
      'Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur sum dolor sit amet.'
  }));
  

  active='/';

  intOpen=false;
  constructor(private router:Router){
    this.router.events.subscribe(ev=>{ if(ev instanceof NavigationEnd){ this.active=ev.urlAfterRedirects; this.intOpen=false; } });
    document.addEventListener('click',(e)=>{ if(this.intOpen){ const t=e.target as HTMLElement; if(!t.closest('.int')) this.intOpen=false; } });
  }

  open(){ this.intOpen=true; }
  close(){ this.intOpen=false; }
  gotoAll(){ this.intOpen=false; this.router.navigateByUrl('/integrations'); }


  // active filter state
  filter: 'All' | 'Category 1' | 'Category 2' | 'Category 3' = 'All';

  // computed list based on active filter
  get filteredPosts(): Post[] {
    return this.filter === 'All'
      ? this.posts
      : this.posts.filter(p => p.category === this.filter);
  }

  setFilter(f: 'All' | 'Category 1' | 'Category 2' | 'Category 3') {
    this.filter = f;
  }
}
