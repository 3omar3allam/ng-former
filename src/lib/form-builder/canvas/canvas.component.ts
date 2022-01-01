import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { FieldBase } from '../../shared/field';
import { FormBuilderService } from '../form-builder.service';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['../form-builder.component.scss', './canvas.component.scss'],
})
export class CanvasComponent implements OnInit {
  @Input() fields!: FieldBase[];

  constructor(
    private fbs: FormBuilderService
  ) {}

  ngOnInit(): void {
    this.fbs.fieldCreated$.subscribe(data => {
      const field = this.fbs.castPerType(data.field);
      if (data.index != null && this.fields[data.index]) {
        this.fields[data.index] = field;
      } else {
        this.fields.push(field)
      }
    });

    this.fbs.fieldDeleted$.subscribe(index => {
      if (this.fields[index]) {
        this.fields.splice(index, 1);
      }
    });
  }

  drop(event: CdkDragDrop<FieldBase[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex)
    }
  }
}
