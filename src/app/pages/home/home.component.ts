import { Component } from '@angular/core';
import { Clipboard } from '@angular/cdk/clipboard';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  copiado: boolean = false;

  correo:string = 'miguel.arp.2003@gmail.com';

  copyMensaje:string = 'Copiar';

  copy(){
      this.clipboard.copy(this.correo);
      this.copiado = true;
      this.copyMensaje = 'Copiado';
      setTimeout( () => {
        this.copiado=false;
        this.copyMensaje = 'Copiar';
      }, 1000 )
  }
  constructor( private clipboard:Clipboard){}
}
