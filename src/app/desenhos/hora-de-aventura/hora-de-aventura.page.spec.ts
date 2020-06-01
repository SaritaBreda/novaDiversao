import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HoraDeAventuraPage } from './hora-de-aventura.page';

describe('HoraDeAventuraPage', () => {
  let component: HoraDeAventuraPage;
  let fixture: ComponentFixture<HoraDeAventuraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoraDeAventuraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HoraDeAventuraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
