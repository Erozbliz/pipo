import { Component, OnInit } from '@angular/core';
import { Pipo } from '../pipo';

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

  constructor() { }

  ngOnInit() {
  }

}
