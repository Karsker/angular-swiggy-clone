import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInPanelComponent } from './sign-in-panel.component';

describe('SignInPanelComponent', () => {
  let component: SignInPanelComponent;
  let fixture: ComponentFixture<SignInPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignInPanelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignInPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
