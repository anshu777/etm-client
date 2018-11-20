import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class DataService {
    private url = 'http://localhost/etm/api/';

    constructor(private http: Http) { }

    getList(objectName: string): Observable<any> {
        return this.http.get(`${this.url}${objectName}`)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        return res.json().Data || {};
    }

    private handleError(error: any) {
        const errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    post(objectName: string, postData: any): Observable<any> {
        const options = new RequestOptions({ headers: new Headers({ 'Content-Type': 'application/json' }) });
        return this.http.post(`${this.url}${objectName}`, postData, options)
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
}
