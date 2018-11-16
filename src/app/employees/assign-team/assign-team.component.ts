import { Component, Input, Output, OnDestroy, OnInit, EventEmitter } from '@angular/core';
import { Employee } from '../employee.model';

@Component({
    selector: 'et-assign-team',
    templateUrl: './assign-team.html',
    styleUrls: ['./assign-team.css']
})

export class AssignTeamComponent implements OnInit, OnDestroy {
    private teams;
    private employees: Employee[];
    @Input() teamId: number;
    @Input() selectedEmp = [];
    settings = {};
    @Input()
    get processEmployees(): Employee[] {
        return this.processEmployee();
    }
    set processEmployees(val: Employee[]) {
        this.employees = val;
    }
    @Output() teamIdChange = new EventEmitter();
    @Output() selectedEmpChange = new EventEmitter();

    constructor() {
        this.teams = [
            { 'id': 1, 'name': 'Mars' },
            { 'id': 2, 'name': 'Saturn' },
            { 'id': 3, 'name': 'Mercury' },
            { 'id': 4, 'name': 'Venus' }
        ];
        this.teamId = 0;
    }

    ngOnInit() {
        this.settings = {
            text: '--Select Employee--',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            classes: 'myclass custom-class'
        };
    }

    ngOnDestroy() {
    }
    selectTeam(id: number) {
        this.teamIdChange.emit(id);
    }
    processEmployee(): Employee[] {
        const result: Array<any> = [];
        this.employees.forEach(item => {
            result.push({ id: Number(item.id), itemName: item.firstName });
        });
        return result;
    }
    onItemSelect(item: any) {
        this.selectedEmpChange.emit(this.selectedEmp);
    }
    OnItemDeSelect(item: any) {
        this.selectedEmpChange.emit(this.selectedEmp);
    }
    onSelectAll(items: any) {
        this.selectedEmpChange.emit(this.selectedEmp);
    }
    onDeSelectAll(items: any) {
        this.selectedEmpChange.emit(this.selectedEmp);
    }
}
