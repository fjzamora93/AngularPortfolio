import { Component, inject } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';

@Component({
  selector: 'app-step-form',
  standalone: true,
  imports: [
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  templateUrl: './step-form.component.html',
  styleUrl: './step-form.component.css'
})
export class StepFormComponent {
    private _formBuilder = inject(FormBuilder);

    firstFormGroup: FormGroup = this._formBuilder.group({firstCtrl: ['']});
    secondFormGroup: FormGroup = this._formBuilder.group({secondCtrl: ['']});
}
