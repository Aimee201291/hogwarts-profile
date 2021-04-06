import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeachersComponent } from './components/teachers/teachers.component';

import { TeacherRoutingModule } from './teacher-routing.module';
import { SharedModule } from './../shared/shared.module';

@NgModule({
  declarations: [
    TeachersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    TeacherRoutingModule
  ]
})
export class TeacherModule {

}