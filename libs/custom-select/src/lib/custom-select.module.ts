import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomSelectComponent } from './custom-select/custom-select.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [
    CustomSelectComponent
  ],
  exports: [CustomSelectComponent]
})
export class CustomSelectModule {}
