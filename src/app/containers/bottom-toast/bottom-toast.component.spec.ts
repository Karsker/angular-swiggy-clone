import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomToastComponent } from './bottom-toast.component';

describe('BottomToastComponent', () => {
  let component: BottomToastComponent;
  let fixture: ComponentFixture<BottomToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BottomToastComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BottomToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
