import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Heading } from './components/heading/heading';
import { Button } from './components/button/button';
import { Card } from './components/card/card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Heading, Button, Card],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('myapp');
}
