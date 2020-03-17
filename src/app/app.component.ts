import { Component, Input } from '@angular/core';
import { listaStanze } from './listaStanze.model';
import { Stanza } from './stanza.model';
import { Pren } from './pren.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  selectedOption : string;
  title = "Hotel Labati";
  stanze = listaStanze;
  selectedStanza: Stanza = listaStanze[0];
  listaPren: Pren[];  //Questo vettore va passato al componente sonList
  obsPren : Observable<Pren[]>;

  constructor(public  http: HttpClient) {

  }

  ngOnInit() {
    this.listaPren = new Array <Pren>();
    this.obsPren = this.http.get<Pren[]>("https://my-json-server.typicode.com/malizia-g/hotel/booking");
    this.obsPren.subscribe(this.getPren);
  }

  getPren = (data : Pren[]) =>
  {
    this.listaPren = data;
  }

  /*Il metodo on CLick controlla cerca l'album selezionato in base al titolo e aggiunge la canzone
  Selezionata alla songList*/
  onClick(da: HTMLInputElement  ,a : HTMLInputElement, n :HTMLInputElement, c :HTMLInputElement ) : boolean
  {
    this.selectedStanza = listaStanze.find((stanza: Stanza) => stanza.name == this.selectedOption);
    this.listaPren.push(new Pren(this.selectedStanza, new Date(da.value),  new Date(a.value), n.value, c.value));
    //Dopo aver aggiunto la canzone azzero tutti i campi
    da.value ="";
    a.value ="";
    n.value="";
    c.value="";
    this.selectedOption = undefined;
    return false;
  }


  onChange()
  {
    this.selectedStanza = listaStanze.find((stanza: Stanza) => stanza.name == this.selectedOption);
  }
}

