import { Patient } from './../../../services/patientservice/patient';
import { Component, OnInit } from '@angular/core';
import { PatientService } from './../../../services/patientservice/patient.service';

@Component({
  selector: 'app-home-patient',
  templateUrl: 'home-patient.page.html',
  styleUrls: ['home-patient.page.scss'],
})

export class HomePatientPage implements OnInit {
  Patients = [];

  constructor(
    private aptService: PatientService
  ) { }

  ngOnInit() {
    this.fetchPatients();
    let bookingRes = this.aptService.getPatientList();
    bookingRes.snapshotChanges().subscribe(res => {
      this.Patients = [];
      res.forEach(item => {
        let a = item.payload.toJSON();
        a['$key'] = item.key;
        this.Patients.push(a as Patient);
      })
    })
  }

  fetchPatients() {
    this.aptService.getPatientList().valueChanges().subscribe(res => {
      console.log(res)
    })
  }

  deletePatient(id) {
    console.log(id)
    if (window.confirm('Do you really want to delete?')) {
      this.aptService.deletePatient(id)
    }
  }
}
