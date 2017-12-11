import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    constructor() {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${this.getToken()}`
            }
        });
        return next.handle(request);
    }

    getToken(): string {
        return 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6ImI4YTEwNjliZDYwMTBjOWFmNTI2NTFkMzEzOGNhOWQ2YTE4ZDUwMj' +
            'JhZmNmOWU2MWRjZTMzOGM3OTQ0MmQ2OTFmZDhhNDZjMDIyOWRiMjU4In0.eyJhdWQiOiIxIiwianRpIjoiYjhhMTA2OWJkNjAxMGM' +
            '5YWY1MjY1MWQzMTM4Y2E5ZDZhMThkNTAyMmFmY2Y5ZTYxZGNlMzM4Yzc5NDQyZDY5MWZkOGE0NmMwMjI5ZGIyNTgiLCJpYXQiOjE1' +
            'MTIwNTIxMTksIm5iZiI6MTUxMjA1MjExOSwiZXhwIjoxNTQzNTg4MTE5LCJzdWIiOiIxIiwic2NvcGVzIjpbXX0.eB5p8NY6-GKbh1' +
            'KT_Qk5fS6GA1t95uMM3z6pLLEGnXNhyL54D9MVsWopFmMk_3P7qm8CVtO0OguaiAj3pSoC-Bglq9oz_5d6PPYvIiwQpYrygCr9qe' +
            'E7enHU_wFN4HRrYn4zG6ekUxSkPcMFDOahy14n0PEyfqUEMjeV34310AYFrwORFXawH3sNYs90VB1eZBQ9NPf-aWIoj8xDeMLPH9' +
            'PrpJQGma-IQj7FH8dzZNpYnO978QJpQ8GhIgILTTdut8DqTBLzZ62sXqdmcBHhfbKQV-jBLeWmtm_XFyzR_4gK7oOB4OHBXa85Ig' +
            'jQiHCyFW55M2Xf9H3lmv_wUnbU6h1p6hOqcT1zXutRjAZzv9XeyMvPfV523Dau9Dgz3ooXySXPV4foHrX_ELNnbGyxnqQEpUA4DT_m' +
            'KoCGzV3bkmGpwSqy6uCEd3Kw-vMppPZJzqeTFT0VG-Ds0TnluH5C3Rxn563Tj6NAnMaLY6cAWHYAnIYYjW-1qc__fUO3WvxErPqrwP' +
            '1IQdK_ROlhH6mKOwzjQL7MUcOk7VhsV-zN7xu4lX1dV-7I2P07KcMfZCePxmgPAQayFcTe6DSBMmoEKORu14AY0rhi2dHCLrU6p5m' +
            'ZrQoDqMu2WGEOxrNR3XVvwOE5yfoXFyilA5A1a06QrnK79LTAV1lOQq8LZvpt2tc';
    }
}
