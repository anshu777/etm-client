import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Employee } from './employee.model';
import { DataService } from '../shared/service/data-service';

@Injectable()
export class EmployeesResolve implements Resolve<Employee[]> {
    constructor(
        private dataService: DataService
    ) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Employee[]> {
        return this.dataService.getList('employees');
    }
}
