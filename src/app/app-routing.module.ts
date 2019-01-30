import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuizComponent } from './quiz/quiz.component';
import { EmailComponent } from './email/email.component';

const routes: Routes = [
  { path: '', component: QuizComponent },
  { path: 'email', component: EmailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
