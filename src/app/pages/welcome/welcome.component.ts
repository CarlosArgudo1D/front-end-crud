import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';  // Importamos RouterModule

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [RouterModule],  // Añadimos RouterModule aquí para habilitar el enrutamiento
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
