
import { ChangeDetectionStrategy, Component, input } from '@angular/core';

type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type HeadingAlignment = 'left' | 'center' | 'right';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.html',
  styleUrl: './heading.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Heading {
  tag = input<HeadingLevel>('h1');
  alignment = input<HeadingAlignment>('left');
  color = input<string>('inherit');
  fontWeight = input<string | number>('normal');
  innerHTML = input<string>('');
}

