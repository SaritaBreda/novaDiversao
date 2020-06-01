import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TheWalkingDeadPage } from './the-walking-dead.page';

describe('TheWalkingDeadPage', () => {
  let component: TheWalkingDeadPage;
  let fixture: ComponentFixture<TheWalkingDeadPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TheWalkingDeadPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TheWalkingDeadPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
