import {Routes} from '@angular/router';
import { FlierComponent } from './flier/flier.component';
import {DetailComponent} from './detail/detail.component';

export const appRoutes: Routes = [
  { path: 'flier', component: FlierComponent},
  { path: 'discount-living-rooms/sofas', component: DetailComponent},
  { path: 'discount-living-rooms/sleeper-sofas', component: DetailComponent},
  { path: 'discount-dining-rooms/dining-room-sets', component: DetailComponent},
  { path: 'discount-dining-rooms/tables', component: DetailComponent},
  { path: 'discount-bedrooms/bedroom-sets', component: DetailComponent},
  { path: 'discount-bedrooms/queen-bedroom-sets', component: DetailComponent},
  { path: 'discount-leather/sofas', component: DetailComponent},
  { path: 'discount-leather/leather-loveseats', component: DetailComponent},
  { path: 'discount-mattress/queen-mattresses', component: DetailComponent},
  { path: 'discount-mattress/king-mattresses', component: DetailComponent},
  { path: 'discount-home-decor/lamps', component: DetailComponent},
  { path: 'discount-home-decor/rugs', component: DetailComponent},

  { path: '', component: FlierComponent},
  { path: '**', component: FlierComponent},
];
