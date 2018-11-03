import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'page-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [  ]
})

export class HomeComponent implements OnInit {

  constructor(
    private _route:Router
  ) {}

  ngOnInit() {
   
  }

  goToRequests() {
    this._route.navigate(['/requests']);
  }

}
