import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-bloodshot',
  templateUrl: './bloodshot.page.html',
  styleUrls: ['./bloodshot.page.scss'],
})
export class BloodshotPage implements OnInit {

  @ViewChild('IonSlides') slider: any;
  options: {
    autoplay: true
  }

  constructor() { }

  ngOnInit() {
  }

}
