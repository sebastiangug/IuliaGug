import { Component, OnInit } from '@angular/core';
import { NotifyService } from '../../modules/admin/services/notify.service';
import { EncryptionService } from '../../services/encryption.service';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss'],
})
export class CodeComponent implements OnInit {
  validity: 'draft' | 'valid' | 'invalid' = 'draft';

  constructor(
    private notify: NotifyService,
    private encryptionService: EncryptionService,
  ) {}

  ngOnInit(): void {}

  public accessMain(code: string) {
    if (code.length < 2 || code.length > 100) {
      this.notify.warn('Code length invalid');
    } else {
      this.encryptionService.attemptAccess(code);
    }
  }
}
