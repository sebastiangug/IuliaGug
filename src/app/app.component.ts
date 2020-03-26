import { Component, ChangeDetectionStrategy } from '@angular/core';
import { EncryptionService } from './services/encryption.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public hover = false;
  constructor(public encryptionService: EncryptionService) {}

  public blurChanged(hover: boolean) {
    this.hover = hover;
  }
}
