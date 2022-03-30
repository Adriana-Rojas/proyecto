import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class RecicladorService {

  constructor(private firestore: AngularFirestore) { }


  agregarReciclador(reciclador:any) : Promise <any>{
    return this.firestore.collection('recicladores').add(reciclador);

  }
  
}
