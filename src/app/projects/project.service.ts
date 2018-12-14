import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

import { Project } from './project.model';

@Injectable()
export class ProjectService {
    private url = 'http://localhost:4200/assets/api/projects.json';
    //private url = 'http://localhost/project-tracker-apis/api/projects';   // URL to web API
    private apiUrl = 'http://localhost/etmapi/api/project/';   // URL to web API

    constructor(private http: Http) { }

    getList(): Observable<Project[]> {
        return this.http.get(this.apiUrl + 'getlist')
            .map(this.extractListData)
            .catch(this.handleError);
    }

    // getList(): Observable<Project[]> {
    //     return this.http.get(this.url)
    //         .map(this.extractData)
    //         .catch(this.handleError);
    // }

    get(): Observable<Project> {
        return this.http.get(this.url)
            .map(this.extractData)
            .catch(this.handleError);
    }


    private extractData(res: Response) {
        let data = res.json();
        return data || {};
    }

    private extractListData(res: Response) {
        let data = res.json().Data;
        return data || {};
    }

    private handleError(error: any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }

    save(url: any, esheet: any) {
        const headerOptions = new Headers({ 'Content-Type': 'application/json' });
        const requestOptions = new RequestOptions({ method: RequestMethod.Post, headers: headerOptions });
        return this.http.post(this.apiUrl + url, esheet, requestOptions)
            .map(this.extractData)
            .catch(this.handleError);
    }
}