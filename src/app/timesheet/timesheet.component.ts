import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { TableComponent } from './table/table.component';
import { TimesheetService } from './timesheet.service';
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
    private saveDataSub: Subscription;
    private weekDate: Date;

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
    private headerDays: Array<any> = [
        { id: 1, name: 'Sun' },
        { id: 2, name: 'Mon' },
        { id: 3, name: 'Tue' },
        { id: 4, name: 'Wed' },
        { id: 5, name: 'Thu' },
        { id: 6, name: 'Fri' },
        { id: 7, name: 'Sat' },
    ];

    private header: Array<any> = [
        { id: 1, name: 'Sun' },
        { id: 2, name: 'Mon' },
        { id: 3, name: 'Tue' },
        { id: 4, name: 'Wed' },
        { id: 5, name: 'Thu' },
        { id: 6, name: 'Fri' },
        { id: 7, name: 'Sat' },
    ];

    constructor(private route: ActivatedRoute, private timesheetService: TimesheetService) {


    }

    ngOnInit() {
        /* Initialize this.* bindable members with data.* members */

        this.weekDate = this.getLastSunday(new Date());
        this.resetHeaders();
        this.employeeId = 1;
        this.etDataSub = this.timesheetService.get('getbyuserid/2')
            .subscribe(etsheet => this.mapTimesheetData(etsheet));
    }

    getLastSunday(date: Date) {
        const saturday = this.getLastWeekday(date, 6);
        return this.getLastWeekday(saturday, 0);
    }

    getLastWeekday(date, weekday) { // 0 = sunday, 1 = monday, ... , 6 = saturday
        const d = new Date(date);
        d.setDate(d.getDate() + weekday - d.getDay()); // move to last of given weekday
        return d;
    }

    resetWeekDate(event: any) {
        this.weekDate = new Date(this.getLastSunday(new Date(event.target.value)));
        this.resetHeaders();
    }

    resetHeaders() {
        this.header = [];
        const wDate: Date = new Date();
        wDate.setDate(this.weekDate.getDate() - 1);
        for (let ctr = 1; ctr <= 7; ctr++) {
            this.header.push({
                id: ctr,
                name: this.headerDays.find(x => x.id === ctr).name,
                dDate: new Date(wDate.setDate(wDate.getDate() + 1))
            });
        }
    }

    saveTimesheet() {

        const employeeTimesheet = new EmployeeTimesheet();
        employeeTimesheet.employeeId = 1;
        employeeTimesheet.teamId = 1;
        employeeTimesheet.timesheetRows = this.tableComponent.rowFields;

        this.saveDataSub = this.timesheetService.save('post', employeeTimesheet)
            .subscribe(
                (success) => {
                    // this.onSuccess(success);
                    console.log(this.tableComponent.rowFields);
                },
                err => {
                    // this.handleError(err);
                    console.log(err);
                });
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
