import { Component } from '@angular/core';



@Component({
  selector: 'app-estructuras',
  templateUrl: './estructuras.component.html',
  styleUrls: ['./estructuras.component.scss']
})
export class EstructurasComponent {
  showInfo = true;
  students = [{name: 'Ana'}, {name: 'Luis'}, {name: 'Maria'}];
  role: string = 'editor | admin | viewer';
}
