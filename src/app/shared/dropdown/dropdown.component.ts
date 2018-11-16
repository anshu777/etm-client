import { Component, OnInit, ViewChild, Input }   from '@angular/core';
import { List } from 'immutable';

@Component({
    selector: 'et-dropdown', 
    templateUrl: './dropdown.component.html'
})

export class DropdownComponent implements OnInit {
    @Input() singleSelectData: Array<any>;

    ngOnInit(){

    }
}