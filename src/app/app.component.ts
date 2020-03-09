import { Component, ChangeDetectionStrategy } from '@angular/core';
import { EncryptionService } from './services/encryption.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  constructor(public encryptionService: EncryptionService) {}
}
