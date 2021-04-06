import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
/*import { ReactiveFormsModule } from '@angular/forms';*/

import { AgePipe } from './pipes/age/age.pipe';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AgePipe,
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    AgePipe,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
    /*ReactiveFormsModule*/
  ]
})
export class SharedModule { }
