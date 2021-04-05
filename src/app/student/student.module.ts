import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsComponent } from './components/students/students.component';

import { StudentRoutingModule } from './student-routing.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    StudentsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    StudentRoutingModule
  ]
})
export class StudentModule {

}