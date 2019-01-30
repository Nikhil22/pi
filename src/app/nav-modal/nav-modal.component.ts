import { Component, OnInit, Input } from '@angular/core';
import { NavModal } from '../../types/nav-modal';

@Component({
  selector: 'app-nav-modal',
  templateUrl: './nav-modal.component.html',
  styleUrls: ['./nav-modal.component.css']
})
export class NavModalComponent implements OnInit {
  @Input()
  configObj: NavModal

  constructor() { }

  ngOnInit() {
  }

}
