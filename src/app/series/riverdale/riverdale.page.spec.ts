import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RiverdalePage } from './riverdale.page';

describe('RiverdalePage', () => {
  let component: RiverdalePage;
  let fixture: ComponentFixture<RiverdalePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RiverdalePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RiverdalePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
