import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Project } from './project.model';
import { ProjectService } from './project.service';

@Injectable()
export class ProjectsResolve implements Resolve<Project[]> {
    constructor(
        private ProjectService: ProjectService
    ) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Project[]> {
        return this.ProjectService.getList();
    }
}