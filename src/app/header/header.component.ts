import { Component, OnInit } from '@angular/core';
import { getDefaultInfoConfigObj, InfoModal } from '../../types/info-modal';
import { infoModalMessage } from '../../data/info-modal'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  infoModalConfigObj: InfoModal = getDefaultInfoConfigObj();
  showInfoModal = false

  constructor() { }

  ngOnInit() {
  }

  onInfoClick() {
    console.log("clciked")
    const self = this
    this.infoModalConfigObj = {
      title: 'PI',
      message: infoModalMessage,
      theme: 'bg-wiki-btn-blue',
      onClose: () => {
        self.showInfoModal = false
      }
    }
    this.showInfoModal = true
  }

}
