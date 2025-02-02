import { Component, OnInit } from '@angular/core';
import { CrudService, Reminder } from '../services/crud.service'; 

@Component({
  selector: 'app-reminders-list',
  standalone: true,
  imports: [],
  templateUrl: './reminders-list.component.html',
  styleUrls: ['./reminders-list.component.css']
})
export class RemindersListComponent implements OnInit {
  reminders: Reminder[] = []; // Variable para almacenar los recordatorios

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.loadReminders(); // Cargar los recordatorios cuando el componente se inicialice
  }

  loadReminders(): void {
    this.crudService.getReminders().subscribe(
      (data) => {
        this.reminders = data; // Asignamos los recordatorios recibidos al array
      },
      (error) => {
        console.error('Error al cargar los recordatorios', error); // Manejo de errores
      }
    );
  }
}
