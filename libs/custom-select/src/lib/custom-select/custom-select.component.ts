import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'blueprint-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss']
})
export class CustomSelectComponent implements OnInit {

  customForm: FormGroup;
  @Input() data: any;
  @Input() isValidated: any;
  @Output() responseData = new EventEmitter();

  constructor() {
    this.customForm = new FormGroup({
      customInputDropdown: new FormControl('', [Validators.required])
    });
    this.customForm.controls.customInputDropdown.valueChanges.subscribe((response) => {
      if (this.customForm.valid) {
        this.responseData.emit(response);
      }
    })
  }
  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.isValidated.currentValue) {
      this.customForm.markAllAsTouched();
    }
  }
}
