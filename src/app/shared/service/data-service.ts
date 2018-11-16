import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DataService {
    private url = 'http://localhost:4200/assets/api/';
    // private url = 'http://localhost/employee-tracker-apis/api/employees';   // URL to web API

    constructor(private http: Http) { }

    getList(objectName: string): Observable<any> {
        return this.http.get(`${this.url}${objectName}.json`)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        return res.json() || {};
    }

    private handleError(error: any) {
        const errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    post(postURL: string, postData: any): Observable<any> {
        const headers = new Headers().set('content-type', 'application/json');
        return this.http.post(postURL, postData)
            .map(this.extractData)
            .catch(this.handleError);
    }
}
