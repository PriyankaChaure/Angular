import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MModuleModule } from './mmodule/mmodule.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,
    MModuleModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Material_Angular';
}
