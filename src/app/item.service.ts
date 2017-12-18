import { Injectable } from '@angular/core';
import { Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Item } from './item';

import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class ItemService {

    public url:string;
    // Token
        public token:string='Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjM3N2UxYTdkYjQ3NDBlMDg0ZTQyZjk2MmQ2Nzc3YTVjMDBkODVjYjVjZWZhMWRmOTJmMmNmZTNjYTA4MGQ1YzVjMTk2NTFlNWQwMjEwMzNjIn0.eyJhdWQiOiIyIiwianRpIjoiMzc3ZTFhN2RiNDc0MGUwODRlNDJmOTYyZDY3NzdhNWMwMGQ4NWNiNWNlZmExZGY5MmYyY2ZlM2NhMDgwZDVjNWMxOTY1MWU1ZDAyMTAzM2MiLCJpYXQiOjE1MTMyODc1MDIsIm5iZiI6MTUxMzI4NzUwMiwiZXhwIjoxNTQ0ODIzNTAyLCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.TySb98Pa51x2Tf4u_pz5xxZBj1gTTBmnoI8pAe73BMOWTtv2DEDXVsRJy9yiYujR4dos653-4jliE17LOrQKXR7Pk02GiqkvIgHIdHQmPlLlhOJRbycAVX6ryui_M633L4iBj8oU43eXmKZE_WCb-vzzvyVx-btitevIWwO5CLIQSkreHb6k5tXXm97MhhxLqasUuVnDcuO0miMXIDEdbNrlhboGfODWL7H27AwCumx81e1tFISgW4REIfZcWil06CF3Xchv5qbBsUAJyld9TnuDQ75miIvCbPWCgyzrp0sRSqzhxgRt_SM3Q0opQNRJRQscHOn2XLSOWglV_BA3QWlW70TX7DYHZ_TxFIrqu4gDLMy5e56rnlfCrtzq787tcqBFOEeIfOh5GZNQXzTsV6Df6m09liQXDtXqI_V9pIbWvDADsDDDG25Upvnj2t_lGuz1zb6ylqXbzKRWvj4yC1qqpNSSE_Hxz2UAvYORcB4mqiy2KQBJ_fIbkUSU9wsOx2kE87YszKFrzbP8A18jV4bT83NY7Iz92e9dQ8_2Ap2c5m_1ffzH1_9U0M85O4W9OAgJOxAeIVRUFnwrZ7Fc3DCIX01BtSPYodYXQ3K7QXJpQ9QwJdm6Teqq6sEbxyGG2QrGvfOWET0qYOjMofxFBnLJDVkFixevHG66RJ8vSoE';
    //

    constructor( private _http: HttpClient ) { 
        this.url="https://stormy-coast-32294.herokuapp.com/api";
    }

    public getVarieties() {
        return this._http.get(this.url + '/varieties',  {
            headers: new HttpHeaders().set('Authorization', this.token),
        });
    }

    public postItem(object:Item){
        
        let body= JSON.stringify(object);

        return this._http.post(this.url + '/saleitems', body, {
            headers: new HttpHeaders()
            .set('Authorization', this.token)
            .set('Content-Type','application/json'),
        });
    }

    public getItems(count:number){
        return this._http.get(this.url + '/saleitems?page='+count,  {
            headers: new HttpHeaders().set('Authorization', this.token),
        });
    }
}
