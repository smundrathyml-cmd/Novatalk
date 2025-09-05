import { Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { FeaturesComponent } from './features/features.component';
import { ResourcesComponent } from './resources/resources.component';
import { PricingComponent } from './pricing/pricing.component';
import { IntegrationsComponent } from './integrations/integrations.component';
import { CaseStudiesComponent } from './case-studies/case-studies.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'how-it-works', component: HowItWorksComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'pricing', component: PricingComponent },
  { path: 'integrations', component: IntegrationsComponent },
  {path: 'case-studies', component: CaseStudiesComponent},
  { path: '**', redirectTo: '' }
];