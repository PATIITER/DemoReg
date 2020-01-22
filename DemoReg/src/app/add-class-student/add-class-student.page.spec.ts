import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddClassStudentPage } from './add-class-student.page';

describe('AddClassStudentPage', () => {
  let component: AddClassStudentPage;
  let fixture: ComponentFixture<AddClassStudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClassStudentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddClassStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
