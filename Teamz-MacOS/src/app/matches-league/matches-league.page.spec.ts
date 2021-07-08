import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MatchesLeaguePage } from './matches-league.page';

describe('MatchesLeaguePage', () => {
  let component: MatchesLeaguePage;
  let fixture: ComponentFixture<MatchesLeaguePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchesLeaguePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MatchesLeaguePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
