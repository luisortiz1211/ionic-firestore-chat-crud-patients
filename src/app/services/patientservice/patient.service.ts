import { Patient } from '../patientservice/patient';
import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class PatientService {
  patientListRef: AngularFireList<any>;
  patientRef: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  // Create
  createPatient(apt: Patient) {
    return this.patientListRef.push({
      name: apt.name,
      email: apt.email,
      mobile: apt.mobile
    })
  }

  // Get Single
  getPatient(id: string) {
    this.patientRef = this.db.object('/patient/' + id);
    return this.patientRef;
  }

  // Get List
  getPatientList() {
    this.patientListRef = this.db.list('/patient/');
    return this.patientListRef;
  }

  // Update
  updatePatient(id, apt: Patient) {
    return this.patientRef.update({
      name: apt.name,
      email: apt.email,
      mobile: apt.mobile
    })
  }

  // Delete
  deletePatient(id: string) {
    this.patientRef = this.db.object('/patient/' + id);
    this.patientRef.remove();
  }
}
