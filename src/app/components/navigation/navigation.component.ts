import { Component, ChangeDetectionStrategy } from '@angular/core';
import { EncryptionService } from '../../services/encryption.service';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationComponent {
  constructor(public encryptionService: EncryptionService) {}
}
