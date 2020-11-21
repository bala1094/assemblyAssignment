import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TimeLineComponent } from './time-line/time-line.component';
import { CustomTimeLoneComponent } from './custom-time-lone/custom-time-lone.component';

const routes = [
  { path: 'timeline', component: TimeLineComponent, },
  { path: 'home', component: HomeComponent, },
  { path: 'customtimeline', component: CustomTimeLoneComponent, },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
