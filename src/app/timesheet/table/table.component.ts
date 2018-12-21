import { Component, Input, Output, OnChanges, OnInit } from '@angular/core';
import { TimesheetRow } from '../timesheet.model';

@Component({
  selector: 'data-table',
  templateUrl: './table.component.html',
  //template: require('./table.component.html'),
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, OnChanges {
  @Input() header: Array<any>; //weakDates
  @Input() leftColumns: Array<any>; //tasks
  @Input() employeeId: number;
  rowFields: Array<TimesheetRow> = []; //has one task and rest weakDates ...used internal
  private timeSheetRow: TimesheetRow = new TimesheetRow();
  @Input() inputTimesheetRows: Array<TimesheetRow> = []; //set from timesheet

  ngOnInit() {
    let ctr = 1;
    this.leftColumns.forEach((x) => {
      //use timesheet model here
      this.timeSheetRow = new TimesheetRow();
      this.timeSheetRow.id = ctr;
      this.timeSheetRow.taskName = x.name;
      //add dynamic dates
      this.timeSheetRow.timesheetColumns = [];
      this.header.forEach((y) => {
        this.timeSheetRow.timesheetColumns
          .push({ id: y.id, dayName: y.name, date: y.dDate, empId: this.employeeId, taskId: ctr, hours: 0 });
      });

      // set totalHours if rowFields is having some values
      let totalHours = 0;
      if (!!this.inputTimesheetRows.find(z => z.taskId === ctr)) {
        totalHours = this.inputTimesheetRows.find(z => z.taskId === ctr).totalHours;
      }

      this.timeSheetRow.totalHours = totalHours;
      this.rowFields.push(this.timeSheetRow);
      ctr++;
    });
  }

  ngOnChanges() {
    let ctr = 1;
    this.rowFields.forEach((x) => {
      if (!!this.inputTimesheetRows.find(z => z.taskId === ctr)) {
        const tdate = x.timesheetColumns.find(t => t.taskId === ctr).date;
        x.timesheetColumns.find(t => t.taskId === ctr).hours =
          this.inputTimesheetRows.find(z => z.taskId === ctr).timesheetColumns.find(t => t.date === tdate).hours;

      }
      ctr++;
    });
  }

  changeValue(id: number, date: string, taskId: number, event: any) {
    const tsrow = this.rowFields.find(x => x.id === taskId);
    if (!!tsrow) {
      let sum = 0;
      tsrow.timesheetColumns.forEach(c => { sum += Number(c.hours); });
      tsrow.totalHours = sum;

      //column to set value
      const tcol = this.rowFields.find(x => x.id === this.rowFields.length).timesheetColumns.find(y => y.id === id);
      if (!!tcol) {
        let csum = 0;
        this.rowFields.forEach(x => {
          if (x.id < this.rowFields.length) {
            csum += Number(x.timesheetColumns.find(y => y.id === id).hours);
          }
        });
        tcol.hours = csum;
      }
    }
  }
}

