import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarvelmainComponent } from './marvelmain.component';

describe('PokemainComponent', () => {
  let component: MarvelmainComponent;
  let fixture: ComponentFixture<MarvelmainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarvelmainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarvelmainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
