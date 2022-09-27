import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  Titolo: string = "New Selection Of Herny London";

  constructor() { }

  ngOnInit(): void {
  }

}
