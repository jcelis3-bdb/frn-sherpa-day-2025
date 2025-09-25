import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  title = 'Demo SHERPA DAY 2025 🚀';
  showMessage = true;
  items = ['Angular', 'React', 'Vue'];
  option = 2;

}
