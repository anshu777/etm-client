import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { TimesheetRow } from '../timesheet.model';

@Component({
  selector: 'data-table',
  templateUrl: './table.component.html'
  //template: require('./table.component.html'),
  // styleUrls: ['./table-editable.component.css']
})
export class TableComponent implements OnInit {
  @Input() header: Array<any>; //weakDates
  @Input() leftColumns: Array<any>; //tasks
  @Input() employeeId: number;
  rowFields: Array<TimesheetRow> = []; //has one task and rest weakDates
  private timeSheetRow: TimesheetRow = new TimesheetRow();

  ngOnInit() {
    let ctr = 1;
    this.leftColumns.forEach((x) => {
      //use timesheet model here
      this.timeSheetRow = new TimesheetRow();
      this.timeSheetRow.id = ctr;
      this.timeSheetRow.taskName = x.name;
      //add dynamic dates
      this.timeSheetRow.timesheetColumns = [];
      this.header.forEach((y) =>
        this.timeSheetRow.timesheetColumns.push({ id: y.id, date: y.name, empId: this.employeeId, taskId: ctr, hours: 0 }));

      this.timeSheetRow.totalHours = 0;
      this.rowFields.push(this.timeSheetRow);
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

