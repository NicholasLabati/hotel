import { Component, OnInit, Input } from '@angular/core';
import { Stanza } from '../stanza.model';

@Component({
  selector: 'app-dettagli',
  templateUrl: './dettagli.component.html',
  styleUrls: ['./dettagli.component.css']
})
export class DettagliComponent implements OnInit {

  @Input() stanza : Stanza;
  constructor() { }

  ngOnInit(): void {
  }

}
