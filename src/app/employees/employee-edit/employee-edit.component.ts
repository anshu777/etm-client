import { Component, EventEmitter, Input, OnDestroy, Output, OnInit } from '@angular/core';
import { List } from 'immutable';
import { Subscription, Observable } from 'rxjs/Rx';

import { Employee } from '../employee.model';

@Component({
	selector: 'et-edit-employee',
	templateUrl: './employee-edit.component.html',
	//template: require('./employee-edit.component.html'),
	styleUrls: ['./employee-edit.component.css']
})

export class EditEmployeeComponent implements OnInit, OnDestroy {
	@Input() employeeId: any;
	@Input() employee: Employee = new Employee();
	@Input() showEmployeeModal: boolean = false;
	@Output() addEmployee: EventEmitter<any> = new EventEmitter();
	@Output() cancelEmployee: EventEmitter<any> = new EventEmitter();

	private disableSave: boolean = true;

	constructor() {
	}

	ngOnInit() {
	}

	ngOnDestroy() {

	}

}
