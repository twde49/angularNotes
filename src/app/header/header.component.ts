import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>
      My notes
    </h1>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  title= "My notes"
}
