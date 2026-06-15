import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrapCollectionComponent } from './scrap-collection.component';

describe('ScrapCollectionComponent', () => {
  let component: ScrapCollectionComponent;
  let fixture: ComponentFixture<ScrapCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScrapCollectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ScrapCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
