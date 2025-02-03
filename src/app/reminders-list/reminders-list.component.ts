import { Component, OnInit } from '@angular/core';
import { CrudService, Reminder } from '../services/crud.service'; 
import { CommonModule } from '@angular/common'; // Importar CommonModule

@Component({
  selector: 'app-reminders-list',
  standalone: true,
  imports: [CommonModule],  // Aquí importa CommonModule
  templateUrl: './reminders-list.component.html',
  styleUrls: ['./reminders-list.component.css']
})
export class RemindersListComponent implements OnInit {
  reminders: Reminder[] = []; // Variable para almacenar los recordatorios
  errorMessage: string | null = null; // Mensaje de error si no se pueden cargar los recordatorios

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.loadReminders(); // Cargar los recordatorios cuando el componente se inicialice
  }

  loadReminders(): void {
    this.crudService.getReminders().subscribe(
      (data) => {
        this.reminders = data; // Asignamos los recordatorios recibidos al array
        this.errorMessage = null; // Limpiar cualquier mensaje de error
      },
      (error) => {
        console.error('Error al cargar los recordatorios', error); // Manejo de errores
        this.reminders = []; // Asegurarnos de que no haya datos cuando ocurre un error
        this.errorMessage = 'No se pudieron cargar los recordatorios. Intenta de nuevo más tarde.'; // Mostrar mensaje de error
      }
    );
  }
}
