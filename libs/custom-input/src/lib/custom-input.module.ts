import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [
    CustomInputComponent
  ],
  exports: [CustomInputComponent]
})
export class CustomInputModule {}
