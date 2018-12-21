export class TimesheetColumn {
  id: number;
  empId: number;
  taskId: number;
  dayName: string;
  date: Date;
  hours: number;
}

export class TimesheetRow {
  id: number;
  taskId: number;
  taskName: string;
  timesheetColumns: TimesheetColumn[];
  totalHours: number;
}

export class EmployeeTimesheet {
  employeeId: number;
  teamId: number;
  timesheetRows: TimesheetRow[];
}

export class UserDateDto {
  userId: number;
  date: Date;
}
