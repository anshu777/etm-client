import { Http, Response, RequestOptions } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { TimesheetRow, EmployeeTimesheet } from './timesheet.model';

@Injectable()
export class TimesheetService {

    private url = 'http://localhost:4200/assets/api/employees.json';
    private apiUrl = 'http://localhost/etmapi/api/';   // URL to web API

    constructor(private http: Http) { }

    get(url: any): Observable<EmployeeTimesheet> {
        return this.http.get(this.apiUrl + url)
            .map(this.extractData)
            .catch(this.handleError);
    }

    save(url: any, esheet: any) {
        const headers = new Headers().set('content-type', 'application/json');
        return this.http.post(this.apiUrl + url, esheet)
            .map(this.extractData)
            .catch(this.handleError);
    }

    private extractData(res: Response) {
        const data = res.json();
        return data || {};
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        const errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}
