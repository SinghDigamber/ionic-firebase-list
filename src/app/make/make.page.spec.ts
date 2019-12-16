import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MakePage } from './make.page';

describe('MakePage', () => {
  let component: MakePage;
  let fixture: ComponentFixture<MakePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MakePage],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MakePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
