// crud.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interface para los datos del recordatorio
export interface Reminder {
  id: number;
  title: string;
  reminder: string;
  note?: string;
  minute: number;
  hour: number;
  day: number;
  month: number;
  year: number;
  status: boolean;
  importance: 'Normal' | 'Important' | 'Urgent';
  createAt: string;
  updateAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private apiUrl = 'http://localhost:3000/reminders'; // URL del backend

  constructor(private http: HttpClient) { }

  // Obtener todos los recordatorios
  getReminders(): Observable<Reminder[]> {
    return this.http.get<Reminder[]>(this.apiUrl);
  }

  // Crear un nuevo recordatorio
  createReminder(reminder: Reminder): Observable<Reminder> {
    return this.http.post<Reminder>(this.apiUrl, reminder);
  }

  // Obtener un recordatorio por ID
  getReminderById(id: number): Observable<Reminder> {
    return this.http.get<Reminder>(`${this.apiUrl}/${id}`);
  }

  // Actualizar un recordatorio
  updateReminder(id: number, reminder: Reminder): Observable<Reminder> {
    return this.http.patch<Reminder>(`${this.apiUrl}/${id}`, reminder);
  }

  // Eliminar un recordatorio
  deleteReminder(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
