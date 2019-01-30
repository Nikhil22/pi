import { Component, OnInit } from '@angular/core';

import { isValidEmail } from '../../validate'

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  email = '';
  isEmailValid = false

  onEmailChange() {
    this.isEmailValid = isValidEmail(this.email)
  }

  constructor() { }

  ngOnInit() {
  }

}
