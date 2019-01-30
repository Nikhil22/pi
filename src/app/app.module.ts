import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';


import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { FooterComponent } from './footer/footer.component';
import { InfoModalComponent } from './info-modal/info-modal.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { EmailComponent } from './email/email.component';
import { NavModalComponent } from './nav-modal/nav-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    FooterComponent,
    InfoModalComponent,
    HeaderComponent,
    EmailComponent,
    NavModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatRadioModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
