import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TableComponent } from './table/table.component';
import { DataService } from '../shared/service/data-service';
import { EmployeeTimesheet, TimesheetRow, TimesheetColumn } from './timesheet.model';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'et-timesheet',
    templateUrl: './timesheet.component.html',
    styleUrls: ['./timesheet.css']
})

export class TimesheetComponent implements OnInit {
    errorMessage: string;
    title = 'Timesheet';
    @ViewChild('tableComponent') private tableComponent: TableComponent;
    private teamId: number;
    private employeeId: number;
    private employeeTimesheet: EmployeeTimesheet;
    private etDataSub: Subscription;
    // Tasks to be fetched based on teamId
    private leftColumns: Array<any> = [
        { id: 1, name: 'Adhoc Meeting' },
        { id: 2, name: 'Coding' },
        { id: 3, name: 'Bug Fixing' },
        { id: 4, name: 'Daily Standup' },
        { id: 5, name: 'Code Review' },
        { id: 6, name: 'Total' }
    ];

    //WeakDates
    private header: Array<any> = [
        { id: 1, name: 'Sun' },
        { id: 2, name: 'Mon' },
        { id: 3, name: 'Tue' },
        { id: 4, name: 'Wed' },
        { id: 5, name: 'Thu' },
        { id: 6, name: 'Fri' },
        { id: 7, name: 'Sat' },
    ];

    constructor(private dataService: DataService) {


    }

    ngOnInit() {
        /* Initialize this.* bindable members with data.* members */
        this.employeeId = 1;

        this.etDataSub = this.dataService.getList('http://localhost/etmapi/api/timesheet/getbyuserid/1')
            .subscribe(etsheet => this.mapTimesheetData(etsheet));
    }

    private saveTimesheet() {
        const employeeTimesheet = new EmployeeTimesheet();
        employeeTimesheet.employeeId = 1;
        employeeTimesheet.teamId = 1;
        employeeTimesheet.timesheetRows = this.tableComponent.rowFields;
        this.dataService.post('http://localhost:57023/api/timesheet', employeeTimesheet).subscribe();
    }

    mapTimesheetData(etsheet) {
        this.employeeTimesheet = new EmployeeTimesheet();
        this.employeeTimesheet.employeeId = 1;
        this.employeeTimesheet.teamId = 1;
        this.employeeTimesheet.timesheetRows = etsheet.timesheetRows;

        // Fill out leftColumns

        // Fill out WeakDates
    }
}
