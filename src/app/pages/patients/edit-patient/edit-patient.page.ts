import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { FormGroup, FormBuilder } from "@angular/forms";
import { PatientService } from '../../../services/patientservice/patient.service'
@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.page.html',
  styleUrls: ['./edit-patient.page.scss'],
})

export class EditPatientPage implements OnInit {
  updatePatientForm: FormGroup;
  id: any;

  constructor(
    private aptService: PatientService,
    private actRoute: ActivatedRoute,
    private router: Router,
    public fb: FormBuilder
  ) {
    this.id = this.actRoute.snapshot.paramMap.get('id');
    this.aptService.getPatient(this.id).valueChanges().subscribe(res => {
      this.updatePatientForm.setValue(res);
    });
  }

  ngOnInit() {
    this.updatePatientForm = this.fb.group({
      name: [''],
      lastName:[],
      civilStatus:[],
      employment:[],
      email: [''],
      mobile: [''],
      address:[]

    })
    console.log(this.updatePatientForm.value)
  }

  updateForm() {
    this.aptService.updatePatient(this.id, this.updatePatientForm.value)
      .then(() => {
        this.router.navigate(['/home']);
      })
      .catch(error => console.log(error));
  }
}