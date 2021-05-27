import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'blueprint-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements OnInit {

  customForm: FormGroup;

  @Input() isValidated: any;
  @Output() responseData = new EventEmitter();

  constructor() {
    this.customForm = new FormGroup({
      customInputText: new FormControl('', [Validators.required]),
    });
    this.customForm.controls.customInputText.valueChanges.subscribe((response) => {
      if (this.customForm.valid) {
        this.responseData.emit(response);
      }
    });
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes?.isValidated?.currentValue) {
      this.customForm.markAllAsTouched();
    }
  }
}
