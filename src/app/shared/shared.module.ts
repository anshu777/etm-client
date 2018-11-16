import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import {
  MatInputModule, MatTableModule, MatButtonModule, MatToolbarModule, MatIconModule,
  MatCardModule
} from '@angular/material';
import { ModalWindowComponent } from './modal-window/modal-window.component';
import { ModalWindowTitleDirective } from './modal-window/modal-window.component';
import { ModalWindowContentDirective } from './modal-window/modal-window.component';
import { ModalWindowActionsDirective } from './modal-window/modal-window.component';
import { PopupComponent } from './popup/popup.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { DropdownComponent } from './dropdown/dropdown.component';
import { MatSortModule, MatPaginatorModule } from '@angular/material';
import { DataService } from './service/data-service';
import { NvD3Module } from 'ng2-nvd3';
// d3 and nvd3 should be included somewhere
import 'd3';
import 'nvd3';

@NgModule({
  imports: [
    AngularMultiSelectModule,
    FormsModule,
    CommonModule,
    NvD3Module,
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSortModule,
    MatPaginatorModule
  ],
  declarations: [
    PopupComponent,
    ModalWindowComponent,
    ModalWindowTitleDirective,
    ModalWindowContentDirective,
    ModalWindowActionsDirective,
    DropdownComponent
  ],
  exports: [
    FormsModule,
    CommonModule,

    PopupComponent,
    ModalWindowComponent,
    ModalWindowTitleDirective,
    ModalWindowContentDirective,
    ModalWindowActionsDirective,

    AngularMultiSelectModule,
    DropdownComponent,
    MatToolbarModule, MatInputModule, MatTableModule, MatButtonModule,
    MatIconModule, MatCardModule, MatSortModule, MatPaginatorModule
  ],
  providers: [
    DataService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class SharedModule { }
