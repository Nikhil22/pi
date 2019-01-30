import { Component, OnInit } from '@angular/core';
import { getDefaultInfoConfigObj, InfoModal } from '../../types/info-modal';
import { getDefaultNavConfigObj, NavModal } from '../../types/nav-modal';
import { infoModalMessage } from '../../data/info-modal'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  infoModalConfigObj: InfoModal = getDefaultInfoConfigObj();
  showInfoModal = false

  navModalConfigObj: NavModal = getDefaultNavConfigObj();
  showNavModal = false

  constructor() { }

  ngOnInit() {
  }

  onHamburgerClick() {
    const self = this
    this.navModalConfigObj = {
      onAbout: () => {
        self.showNavModal = false
        self.onInfoClick()
      },
      onClose: () => {
        self.showNavModal = false
      }
    }
    this.showNavModal = true
  }


  onInfoClick() {
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
