import { Component, OnInit, Input } from '@angular/core';
import { InfoModal } from '../../types/info-modal';

@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.css']
})
export class InfoModalComponent implements OnInit {
  @Input()
  configObj: InfoModal

  constructor() { }

  ngOnInit() {
  }

}
