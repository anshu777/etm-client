import { Injectable }                      from '@angular/core';
import { Observable }                      from 'rxjs/Observable';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';

import { Team }                        from './team.model';
import { TeamService }                 from './team.service';

@Injectable()
export class TeamsResolve implements Resolve<Team[]> {
    constructor(
        private teamService: TeamService
    ) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Team[]> {
        return this.teamService.getList();
    }
}