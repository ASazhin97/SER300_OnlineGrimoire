import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MainDashComponent } from './main-dash/main-dash.component';
import { NavBarComponent } from './partials/nav-bar/nav-bar.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { SideNavComponent } from './main-dash/side-nav/side-nav.component';
import { GeneralNotesComponent } from './main-dash/general-notes/general-notes.component';
import { GoalNotesComponent } from './main-dash/goal-notes/goal-notes.component';
import { AddGameModalComponent } from './main-dash/add-game-modal/add-game-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MainDashComponent,
    NavBarComponent,
    SignupPageComponent,
    SideNavComponent,
    GeneralNotesComponent,
    GoalNotesComponent,
    AddGameModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
