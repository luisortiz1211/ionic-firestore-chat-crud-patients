import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomePatientPage } from './home-patient.page';

describe('HomePatientPage', () => {
  let component: HomePatientPage;
  let fixture: ComponentFixture<HomePatientPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePatientPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomePatientPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
