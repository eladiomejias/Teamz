import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MatchStatsPage } from './match-stats.page';

describe('MatchStatsPage', () => {
  let component: MatchStatsPage;
  let fixture: ComponentFixture<MatchStatsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchStatsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MatchStatsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
