import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  moneyRadioOptions,
  timeRadioOptions,
  riskRadioOptions
} from '../../data/radio-button'

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  moneyRadioOptions = moneyRadioOptions
  moneyPicked = ''
  timeRadioOptions = timeRadioOptions
  timePicked = ''
  riskRadioOptions = riskRadioOptions
  riskPicked = ''
  areInputsValid = false

  onMoneyChange(money) {
    this.moneyPicked = money
    this.areInputsValid = !!(
      this.moneyPicked
      && this.timePicked
      && this.riskPicked
    )
  }

  onRiskChange(risk) {
    this.riskPicked = risk
    this.areInputsValid = !!(
      this.moneyPicked
      && this.timePicked
      && this.riskPicked
    )
  }

  onTimeChange(time) {
    this.timePicked = time
    this.areInputsValid = !!(
      this.moneyPicked
      && this.timePicked
      && this.riskPicked
    )
  }

  onQuizComplete() {
    this.router.navigateByUrl('/email');
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
