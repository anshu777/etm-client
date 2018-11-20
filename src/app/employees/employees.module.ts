import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';


/* Employees Feature Module */
import { EmployeesComponent } from './employees.component';
import { EditEmployeeComponent } from './employee-edit/employee-edit.component';
import { CreateEmployeeComponent } from './employee-create/employee-create.component';
import { AssignTeamComponent } from './assign-team/assign-team.component';

/* Employees Router */
import { employeesRouting } from './employees.routing';


@NgModule({
    imports: [SharedModule, employeesRouting],
    declarations: [EmployeesComponent, EditEmployeeComponent, AssignTeamComponent, CreateEmployeeComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class EmployeesModule { }
