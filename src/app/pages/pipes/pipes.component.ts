import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  public fecha:Object;

  constructor() { 
    this.fecha = new Date(2014, 0, 2);
  }

  ngOnInit() {
  }

}
