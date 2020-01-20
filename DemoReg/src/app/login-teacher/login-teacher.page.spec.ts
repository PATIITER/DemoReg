import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginTeacherPage } from './login-teacher.page';

describe('LoginTeacherPage', () => {
  let component: LoginTeacherPage;
  let fixture: ComponentFixture<LoginTeacherPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginTeacherPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginTeacherPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
