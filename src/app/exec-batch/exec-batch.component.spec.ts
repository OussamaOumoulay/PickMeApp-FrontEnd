import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExecBatchComponent } from './exec-batch.component';

describe('ExecBatchComponent', () => {
  let component: ExecBatchComponent;
  let fixture: ComponentFixture<ExecBatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExecBatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExecBatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
