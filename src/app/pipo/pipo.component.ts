import { Component, OnInit } from '@angular/core';
import { Pipo } from '../pipo';
import { PIPOS } from '../mock-pipo';
@Component({
  selector: 'app-pipo',
  templateUrl: './pipo.component.html',
  styleUrls: ['./pipo.component.css']
})
export class PipoComponent implements OnInit {

  pipo: Pipo = {
    id: 1,
    name: 'Informatique'
  };

  pipos = PIPOS;

  selectedPipo: Pipo;
  onSelect(pipo: Pipo): void {
    this.selectedPipo = pipo;
  }

  constructor() { }

  ngOnInit() {
  }

}
