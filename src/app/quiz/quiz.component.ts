import { Component, OnInit } from '@angular/core';
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

  constructor() { }

  ngOnInit() {
  }

}
