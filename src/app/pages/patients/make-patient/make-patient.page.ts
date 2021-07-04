import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from "@angular/forms";
import { PatientService } from '../../../services/patientservice/patient.service'

@Component({
  selector: 'app-make-patient',
  templateUrl: './make-patient.page.html',
  styleUrls: ['./make-patient.page.scss'],
})

export class MakePatientPage implements OnInit {
  patientForm: FormGroup;

  constructor(
    private aptService: PatientService,
    private router: Router,
    public fb: FormBuilder
  ) { }

  ngOnInit() {
    this.patientForm = this.fb.group({
      name: [''],
      email: [''],
      mobile: ['']
    })
  }

  formSubmit() {
    if (!this.patientForm.valid) {
      return false;
    } else {
      this.aptService.createPatient(this.patientForm.value).then(res => {
        console.log(res)
        this.patientForm.reset();
        this.router.navigate(['/home']);
      })
        .catch(error => console.log(error));
    }
  }
}
