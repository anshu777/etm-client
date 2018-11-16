import { Injectable }                      from '@angular/core';
import { Observable }                      from 'rxjs/Observable';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Task }                        from './task.model';
import { TaskService }                 from './task.service';

@Injectable()
export class TasksResolve implements Resolve<Task[]> {
    constructor(
        private taskService: TaskService
    ) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Task[]> {
        return this.taskService.getList();
    }
}