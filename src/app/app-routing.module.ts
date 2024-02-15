import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { InducteesComponent } from './inductees/inductees.component';
import { BoltonComponent } from './bolton/bolton.component';
import { BrissieComponent } from './brissie/brissie.component';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { SponsorshipComponent } from './sponsorship/sponsorship.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  // {
  //   path: 'inductees',
  //   component: InducteesComponent,
  // },
  // {
  //   path: 'bolton',
  //   component: BoltonComponent,
  // },
  // {
  //   path: 'brissie',
  //   component: BrissieComponent,
  // },
  // {
  //   path: 'guidelines',
  //   component: GuidelinesComponent,
  // },
  // {
  //   path: 'sponsorship',
  //   component: SponsorshipComponent,
  // },
  // {
  //   path: 'contact',
  //   component: ContactComponent,
  // },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
