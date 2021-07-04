import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MakePatientPage } from './make-patient.page';

describe('MakePatientPage', () => {
  let component: MakePatientPage;
  let fixture: ComponentFixture<MakePatientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakePatientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MakePatientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
