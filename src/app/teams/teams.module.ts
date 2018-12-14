import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

/* Team Feature Module */
import { TeamsComponent } from './teams.component';
import { TeamCrudComponent } from './teams-crud/teams-crud.component';
import { AssignTaskComponent } from './assign-task/assign-task.component';
import { TeamService } from './team.service';
import { TeamsResolve } from './teams-resolve.service';
// import { AssignTeamComponent } from './assign-team/assign-team.component'
/* Team Router */
import { teamRouting } from './teams.routing';

@NgModule({
    imports: [SharedModule, teamRouting],
    declarations: [TeamsComponent, TeamCrudComponent, AssignTaskComponent],
    providers: [TeamService, TeamsResolve],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class TeamsModule { }