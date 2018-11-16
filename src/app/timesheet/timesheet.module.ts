import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { TimesheetComponent } from './timesheet.component';
import { TableComponent } from './table/table.component';
import { CommonModule } from '@angular/common';

import { timesheetRouting } from './timesheet.routing';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [timesheetRouting, CommonModule, SharedModule],
    declarations: [TimesheetComponent, TableComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class TimesheetModule { }
