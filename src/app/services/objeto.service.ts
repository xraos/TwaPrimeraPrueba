import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalService} from '../services/global.service';
@Injectable()
export class ObjetosService {
  public url: string;
  constructor(
    public _http: HttpClient,
    private _url: GlobalService,
  ) {
    this.url = _url.getUrl();
  }
  getObjetos() {
    console.log(this.url);
    console.log(this.url);
    return this._http.get(this.url + '/top-headlines?sources=google-news&apiKey=b4748897fc9f461495692c6e2237be12');
  }
  getObjeto(id) {
    console.log(id);
    return this._http.get(this.url + '/top-headlines?sources=google-news&apiKey=b4748897fc9f461495692c6e2237be12');
  }

}
