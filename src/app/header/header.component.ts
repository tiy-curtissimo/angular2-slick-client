import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'slick-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input()
  userName: string;

  constructor() { }

  ngOnInit() {
  }
}
