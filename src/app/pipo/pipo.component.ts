import { Component, OnInit } from '@angular/core';
import { Pipo } from '../pipo';
import { PIPOS } from '../mock-pipo';
import { PipoService } from '../pipo.service';
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

  constructor(private pipoService: PipoService) { }

  getPipos(): void {
    // this.pipos = this.pipoService.getPipos();
    this.pipoService.getPipos().subscribe(pipos => this.pipos = pipos);
  }

  ngOnInit() {
    this.getPipos();
  }

}
