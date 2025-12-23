import { ChangeDetectionStrategy, Component, input } from '@angular/core';

type ButtonColor = 'primary' | 'secondary' | 'accent';
type ButtonSize = 'small' | 'medium' | 'large';

@Component({
  selector: 'app-button',
  templateUrl: './button.html',
  styleUrl: './button.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Button {
  text = input.required<string>();
  color = input<ButtonColor>('primary');
  size = input<ButtonSize>('medium');
}
