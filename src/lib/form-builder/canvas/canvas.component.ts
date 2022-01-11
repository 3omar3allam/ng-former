import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { FieldBase } from '../../shared/field';
import { FormBuilderService } from '../form-builder.service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['../form-builder.component.scss', './canvas.component.scss'],
})
export class CanvasComponent implements OnInit, OnDestroy {
  @Input() fields!: FieldBase<any>[];

  private unsubscribeAll$ = new Subject<void>();
  constructor(
    private fbs: FormBuilderService
  ) { }

  ngOnInit(): void {
    this.fbs.fieldCreated$
      .pipe(takeUntil(this.unsubscribeAll$))
      .subscribe(data => {
        const field = this.fbs.castPerType(data.field);
        if (data.index != null && this.fields[data.index]) {
          this.fields[data.index] = field;
        } else {
          this.fields.push(field)
        }
      });

    this.fbs.fieldDeleted$
      .pipe(takeUntil(this.unsubscribeAll$))
      .subscribe(index => {
        if (this.fields[index]) {
          this.fields.splice(index, 1);
        }
      });
  }

  ngOnDestroy(): void {
    this.unsubscribeAll$.next();
    this.unsubscribeAll$.complete();
  }

  drop(event: CdkDragDrop<FieldBase<any>[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
    }
  }
}
