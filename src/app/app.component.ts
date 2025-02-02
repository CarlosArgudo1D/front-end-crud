import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { CrudService } from './services/crud.service'; // Importa el servicio

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, NzIconModule, NzLayoutModule, NzMenuModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isCollapsed = false;

  constructor(private crudService: CrudService) { }  // Inyección del servicio

  ngOnInit(): void {
    // Llamar al servicio CRUD para obtener los datos
    this.crudService.getReminders().subscribe(
      (data: any) => {  // Aquí puedes especificar el tipo adecuado en lugar de 'any'
        console.log(data);  // Maneja los datos recibidos
      },
      (error: any) => {  // Maneja los errores
        console.error(error);
      }
    );
  }
}
