import { Component, OnInit, Input} from '@angular/core';
import { Pren } from '../pren.model';

@Component({
  selector: 'app-lista-pren',
  templateUrl: './lista-pren.component.html',
  styleUrls: ['./lista-pren.component.css']
})
export class ListaPrenComponent implements OnInit {

  @Input() listaPrenotazioni:Pren[];
  mostraLista : boolean = true;
  suspendedClass = "text-primary";
  constructor() { }

  ngOnInit(): void {
  }

  makeSuspended(pren:Pren)
  {
    console.log(pren);
    pren.suspendedClass = "text-warning";
  }

  hideList()
  {
    this.mostraLista = !this.mostraLista;
  }

}
