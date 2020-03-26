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

  public readonly future =
    'Currently looking to join an innovative company where there is a solid \
  opportunity to grow long term not just from a technical perspective but also \
  business & market wise. ';

  public readonly location =
    'Cambridge but would also consider commuting to London up to 2 days/week';

  public readonly workInterests =
    'Increasingly understand how and why things \
 work under the hood, growing the power to build anything,\
  thoroughly discern the markets, how businesses form, acquire clients and scale.\
 ';

  public readonly personalInterests =
    'HotS, Starcraft, making pizza, amateur barista, woodworking, stocks -- in no particular order.';

  public readonly contact = 'sebastiangug@gmail.com | 07543823164';
}
