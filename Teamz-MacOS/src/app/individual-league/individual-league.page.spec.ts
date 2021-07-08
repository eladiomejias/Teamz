import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { IndividualLeaguePage } from './individual-league.page';

describe('IndividualLeaguePage', () => {
  let component: IndividualLeaguePage;
  let fixture: ComponentFixture<IndividualLeaguePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndividualLeaguePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(IndividualLeaguePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
