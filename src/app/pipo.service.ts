import { Injectable } from '@angular/core';
import { Pipo } from './pipo';
import {PIPOS} from './mock-pipo';
import {Observable, of} from 'rxjs';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class PipoService {

  constructor(private messageService: MessageService) { }

  getPipos(): Observable<Pipo[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(PIPOS);
  }


}
