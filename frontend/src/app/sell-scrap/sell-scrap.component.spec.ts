import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellScrapComponent } from './sell-scrap.component';

describe('SellScrapComponent', () => {
  let component: SellScrapComponent;
  let fixture: ComponentFixture<SellScrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SellScrapComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SellScrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
