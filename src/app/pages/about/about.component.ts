import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutComponent {
  public readonly summary =
    'With 8 years of commercial experience across several disciplines with a strong \
    background in Digital Media. Currently full time employed at Thames Laboratories, a small \
    asbestos surveying company relying on a small in-house team of developers and outside \
    contractors.';

  public readonly future = '';
}
