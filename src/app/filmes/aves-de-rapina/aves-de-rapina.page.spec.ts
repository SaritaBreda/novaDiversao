import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AvesDeRapinaPage } from './aves-de-rapina.page';

describe('AvesDeRapinaPage', () => {
  let component: AvesDeRapinaPage;
  let fixture: ComponentFixture<AvesDeRapinaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvesDeRapinaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AvesDeRapinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
