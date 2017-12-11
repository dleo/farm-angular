import {ApiService} from '../api/api.service';
import {Variety} from '../../model/variety.model';
import {Constants} from '../constants';
import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class VarietyService extends ApiService<Variety> {

    constructor(protected http: HttpClient, protected constants: Constants) {
        super(http, constants, 'varieties');
    }
}
