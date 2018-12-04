import { Component, ViewChild } from '@angular/core';
import { NavController, IonicPage, ToastController } from 'ionic-angular';
import { StorageService } from '../../service/storage.service';
import { AngularFireAuth } from 'angularfire2/auth';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public user: any;
@ViewChild('email') email ;
@ViewChild('senha') password ;

  constructor(public navCtrl: NavController,
    public firebaseauth: AngularFireAuth,
    public toastCtrl: ToastController,
    public storageservice: StorageService) {
  }

  mensagem(texto: string){
    let msg = this.toastCtrl.create({
      duration: 1000,
      position: 'botton'
    })
    msg.setMessage(texto);
    msg.present();
  }

  login(){
    this.firebaseauth.auth.signInWithEmailAndPassword(this.email.value, this.password.value)
    .then(()=>{
      this.mensagem('logado!')
    })
    .catch((error: any)=>{
      this.mensagem('Preencha os campos conforme seu cadastro!')
    })
  }




}
