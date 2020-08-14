import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RateUsComponent } from './rate-us.component';

describe('RateUsComponent', () => {
  let component: RateUsComponent;
  let fixture: ComponentFixture<RateUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RateUsComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RateUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
