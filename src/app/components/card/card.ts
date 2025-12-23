import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Card {
  title = input<string>();
  subtitle = input<string>();
  imageUrl = input<string>();
  boxShadow = input<boolean>(true);
}
