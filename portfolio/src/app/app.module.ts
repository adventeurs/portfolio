import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ResumeComponent } from './resume/resume.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LinesComponent } from './lines/lines.component';
import { RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    LinesComponent,
    ResumeComponent,
    PortfolioComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', 
        redirectTo: 'home',
        pathMatch: 'full' },
      {
        path: 'portfolio', 
        component: PortfolioComponent,
        data: {animation: 'PortfolioPage'}
      },
      {
        path: 'resume', 
        component: ResumeComponent,
        data: {animation: 'ResumePage'}
      },
      {
        path: 'home', 
        component: HomeComponent,
        data: {animation: 'HomePage'}
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
