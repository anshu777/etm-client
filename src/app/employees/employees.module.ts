import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';


/* Employees Feature Module */
import { EmployeesComponent } from './employees.component';
import { EditEmployeeComponent } from './employee-edit/employee-edit.component';
import { AssignTeamComponent } from './assign-team/assign-team.component';
import { EmployeesResolve } from './employees-resolve.service';

/* Employees Router */
import { employeesRouting } from './employees.routing';


@NgModule({
    imports: [SharedModule,  employeesRouting],
    declarations: [EmployeesComponent, EditEmployeeComponent, AssignTeamComponent],
    providers: [EmployeesResolve],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class EmployeesModule { }
