import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ComicElement } from "./comics.model";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  
  public listComics:Array<ComicElement>;
  public parametroUrl:string;

  constructor(
    private _router:Router,
    private _route:ActivatedRoute
  ) { 
    this.listComics = [
      new ComicElement("Batman", new Date(1985, 2, 3), "DC", 0),
      new ComicElement("Spiderman", new Date(1985, 4, 3), "Marvel", 1),
      new ComicElement("Antman", new Date(1985, 2, 3), "Marvel", 2),
      new ComicElement("ChapulinColorado", new Date(1985, 2, 3), "DC", 3),
      new ComicElement("Venom", new Date(1985, 4, 2), "DC", 4)
    ]
  }

  ngOnInit() {
    this._route.params.forEach((params:Params) => {
      this.parametroUrl = params['ident'];
    });
  }

  verDetalle(_index) {
    this._router.navigate(['/list/'+_index]);
  }

  volverAtras() {
    this._router.navigate(['/list']);
  }

}
