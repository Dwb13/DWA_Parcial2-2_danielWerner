import 'rxjs/add/operator/toPromise';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http'
import { Md5 } from "ts-md5/dist/md5";
import { Comic } from '../models/comic.model';
import { MarvelResponse} from '../models/marvel.model'; 

@Injectable({
  providedIn: 'root'
})
export class MarvelService {
  private _marvelComicUrl: string = "http://gateway.marvel.com/v1/public/comics?ts=1&apikey=b5dd158dd0e856443db7fb726fbc6bc9&hash=80182fcb24c6426319114b9e34eafed6";
  private _publicKey: string = "b5dd158dd0e856443db7fb726fbc6bc9";
  private _apiHash: string = "80182fcb24c6426319114b9e34eafed6";

  constructor(private _httpService: Http) { }

  private getHash() : string{
    return this._apiHash;
  }

  private getTimeStamp() : string {
    return new Date().valueOf().toString();
  }

  public async getComics(limit: number = 10, prefix: string = null) : Promise<MarvelResponse<Comic>> {
    let timeStamp = this.getTimeStamp();
    let hash = this.getHash();
    let requestUrl = this._marvelComicUrl + "&limit=" + limit;//  + "?apikey=" + this._publicKey +   + "&hash=" + hash;

    if(prefix){
      requestUrl += "&titleStartsWith=" + prefix;
    }
    let response = await this._httpService.get(requestUrl).toPromise();
    return response.json();
  }

}
