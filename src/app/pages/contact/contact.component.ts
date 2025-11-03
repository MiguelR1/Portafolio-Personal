import { Clipboard } from '@angular/cdk/clipboard';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  public numero: string = '+58 4241258686';
  public email:string = 'miguel20rodriguez02@gmail.com';

  copy(string:string){
    if (string == 'email') {
      this.cb.copy(this.email);
      this.ms.open('El correo electrónico se ha copiado', '✉️',{
        duration: 3000
      })
    }
    else{
    this.cb.copy(this.numero);
    this.ms.open('El número ha sido copiado', '📱',{
      duration: 3000
    })
    }
  }

  constructor( private cb:Clipboard,
               private ms:MatSnackBar
   ){}
}
