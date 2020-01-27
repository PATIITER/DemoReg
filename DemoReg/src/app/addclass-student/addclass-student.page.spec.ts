import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AddclassStudentPage } from './addclass-student.page';

describe('AddclassStudentPage', () => {
  let component: AddclassStudentPage;
  let fixture: ComponentFixture<AddclassStudentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddclassStudentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AddclassStudentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
