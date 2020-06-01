import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { OsSimpsonsPage } from './os-simpsons.page';

describe('OsSimpsonsPage', () => {
  let component: OsSimpsonsPage;
  let fixture: ComponentFixture<OsSimpsonsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OsSimpsonsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(OsSimpsonsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
