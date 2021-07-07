import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TopScorersPage } from './top-scorers.page';

describe('TopScorersPage', () => {
  let component: TopScorersPage;
  let fixture: ComponentFixture<TopScorersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopScorersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TopScorersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
