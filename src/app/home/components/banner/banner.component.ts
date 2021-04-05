import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

  image: string = 'assets/images/banner-1.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
