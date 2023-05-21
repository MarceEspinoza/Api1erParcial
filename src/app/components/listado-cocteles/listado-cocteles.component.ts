import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-listado-cocteles',
  templateUrl: './listado-cocteles.component.html',
  styleUrls: ['./listado-cocteles.component.css']
})
export class ListadoCoctelesComponent {
  @Input() listCocteles: any;

}
