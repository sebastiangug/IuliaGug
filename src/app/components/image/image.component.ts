import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FullImageComponent } from '../full-image/full-image.component';

@Component({
  selector: 'image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageComponent {
  @Input() path: string;

  constructor(private dialog: MatDialog) {}

  fullScreen() {
    this.dialog.open(FullImageComponent, {
      data: this.path,
    });
  }
}
