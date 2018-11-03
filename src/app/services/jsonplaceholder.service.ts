import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';



@Injectable()
export class JsonPlaceholderService {

    public url:string;

    constructor( private _http:Http ){
        this.url = "https://jsonplaceholder.typicode.com";
    }

    getUsers() {
        return this._http.get(this.url + '/users')
        .map(res => res.json());
    }

    getPosts() {
        return this._http.get(this.url + '/posts')
        .map(res => res.json());
    }

}