import { TuiRootModule, TuiAlertModule } from "@taiga-ui/core";
import { Component } from '@angular/core';
import { PhoneFormatterPipe } from './phone-formatter.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PhoneFormatterPipe, TuiRootModule, TuiAlertModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Task 6';

  number = '+78005557778'
  template = '+ ###-###-##-##'
}
